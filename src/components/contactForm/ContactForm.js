import React, {useState} from "react";
import "./ContactForm.scss";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
const REQUEST_TIMEOUT_MS = 15000;
const EMPTY_FORM = {name: "", email: "", subject: "", message: ""};

/**
 * Contact form that emails submissions to the site owner through Web3Forms.
 *
 * Props:
 * - isDark {boolean}: render the dark theme variant.
 * - fallbackEmail {string}: address offered as a mailto link when the form
 *   is not configured or a submission fails.
 * - title {string}, subtitle {string}: optional heading and short intro
 *   shown above the fields.
 *
 * Behaviour:
 * - Requires REACT_APP_WEB3FORMS_ACCESS_KEY at build time. Without it the
 *   form is not rendered and a plain "Email me" button is shown instead.
 * - Validates fields in the browser (required, email format, max lengths).
 * - A hidden honeypot field ("botcheck") filters simple spam bots.
 * - Requests time out after 15s; network, timeout and API errors show a
 *   message with the fallback email. Nothing is thrown to the caller.
 */
export default function ContactForm({isDark, fallbackEmail, title, subtitle}) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  if (!ACCESS_KEY) {
    return fallbackEmail ? (
      <a
        className="main-button contact-form-fallback"
        href={`mailto:${fallbackEmail}`}
      >
        Email me
      </a>
    ) : null;
  }

  const handleChange = event => {
    const {name, value} = event.target;
    setForm(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (status === "sending") return;

    // Honeypot: real visitors never see or fill this field
    if (event.target.botcheck.checked) return;

    setStatus("sending");
    setErrorMessage("");

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim()
            ? `Portfolio: ${form.subject.trim()}`
            : `Portfolio message from ${form.name.trim()}`,
          message: form.message.trim(),
          from_name: "Portfolio Contact Form"
        }),
        signal: controller.signal
      });
      const result = await response.json().catch(() => null);

      if (response.ok && result && result.success) {
        setStatus("success");
        setForm(EMPTY_FORM);
      } else {
        setStatus("error");
        setErrorMessage(
          (result && result.message) || "The message could not be sent."
        );
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.name === "AbortError"
          ? "The request timed out."
          : "Network error — please check your connection."
      );
    } finally {
      clearTimeout(timer);
    }
  };

  const header = (title || subtitle) && (
    <div className="contact-form-header">
      <span className="contact-form-icon" aria-hidden="true">
        <i className="fas fa-paper-plane" />
      </span>
      <div>
        {title && <h3 className="contact-form-title">{title}</h3>}
        {subtitle && <p className="contact-form-subtitle">{subtitle}</p>}
      </div>
    </div>
  );

  if (status === "success") {
    return (
      <div
        className={isDark ? "contact-form contact-form-dark" : "contact-form"}
        role="status"
      >
        {header}
        <p className="contact-form-success">
          <i className="fas fa-check-circle" aria-hidden="true" /> Thanks! Your
          message has been sent. I'll get back to you soon.
        </p>
        <button
          type="button"
          className="contact-form-link"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className={isDark ? "contact-form contact-form-dark" : "contact-form"}
      onSubmit={handleSubmit}
    >
      {header}
      <div className="contact-form-row">
        <label className="contact-form-field">
          <span>
            Name{" "}
            <span className="contact-form-required" aria-hidden="true">
              *
            </span>
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            maxLength={100}
            autoComplete="name"
          />
        </label>
        <label className="contact-form-field">
          <span>
            Email{" "}
            <span className="contact-form-required" aria-hidden="true">
              *
            </span>
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            maxLength={150}
            autoComplete="email"
          />
        </label>
      </div>
      <label className="contact-form-field">
        <span>
          Subject <em>(optional)</em>
        </span>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          maxLength={150}
        />
      </label>
      <label className="contact-form-field">
        <span>
          Message{" "}
          <span className="contact-form-required" aria-hidden="true">
            *
          </span>
        </span>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={3000}
        />
      </label>

      {/* Honeypot field, hidden from people and screen readers */}
      <input
        type="checkbox"
        name="botcheck"
        className="contact-form-honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="contact-form-footer">
        <button
          type="submit"
          className="main-button contact-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </div>
      <p className="contact-form-error" role="alert">
        {status === "error" && (
          <>
            {errorMessage} You can also email me at{" "}
            <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>.
          </>
        )}
      </p>
    </form>
  );
}
