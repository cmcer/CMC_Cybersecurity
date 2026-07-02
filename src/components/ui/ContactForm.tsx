import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import Icon from './Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import './ContactForm.css';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: '', email: '', phone: '', company: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const { lang, t } = useLanguage();
  const reveal = useReveal<HTMLFormElement>();
  const [values, setValues] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const messages = {
    required: lang === 'en' ? 'This field is required.' : 'Vui lòng điền thông tin này.',
    email: lang === 'en' ? 'Please enter a valid email address.' : 'Email chưa hợp lệ.',
  };

  const validate = (v: FormState) => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!v.name.trim()) next.name = messages.required;
    if (!v.email.trim()) next.email = messages.required;
    else if (!EMAIL_RE.test(v.email)) next.email = messages.email;
    if (!v.message.trim()) next.message = messages.required;
    return next;
  };

  const handleChange = (field: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (errors[field]) setErrors(validate(next));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (nextErrors.name) nameRef.current?.focus();
    else if (nextErrors.email) emailRef.current?.focus();
    else if (nextErrors.message) messageRef.current?.focus();
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    // Demo only: no backend. See README to wire Formspree / a server-side handler.
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setValues(EMPTY_FORM);
    }, 600);
  };

  const req = `(${t('contact.required')})`;

  return (
    <form ref={reveal.ref} className={`cform glass ${reveal.className}`} style={reveal.style} onSubmit={handleSubmit} noValidate>
      <div className="cform__row">
        <div className="cform__field">
          <label htmlFor="cf-name">{t('contact.name')} <span className="cform__req">{req}</span></label>
          <input
            ref={nameRef}
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={handleChange('name')}
            aria-invalid={!!errors.name}
          />
          <p className="cform__error">{errors.name}</p>
        </div>
        <div className="cform__field">
          <label htmlFor="cf-email">{t('contact.email')} <span className="cform__req">{req}</span></label>
          <input
            ref={emailRef}
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange('email')}
            aria-invalid={!!errors.email}
          />
          <p className="cform__error">{errors.email}</p>
        </div>
      </div>

      <div className="cform__row">
        <div className="cform__field">
          <label htmlFor="cf-phone">{t('contact.phone')}</label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={handleChange('phone')}
          />
          <p className="cform__error" />
        </div>
        <div className="cform__field">
          <label htmlFor="cf-company">{t('contact.company')}</label>
          <input
            id="cf-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={handleChange('company')}
          />
          <p className="cform__error" />
        </div>
      </div>

      <div className="cform__field">
        <label htmlFor="cf-message">{t('contact.message')} <span className="cform__req">{req}</span></label>
        <textarea
          ref={messageRef}
          id="cf-message"
          name="message"
          rows={4}
          required
          value={values.message}
          onChange={handleChange('message')}
          aria-invalid={!!errors.message}
        />
        <p className="cform__error">{errors.message}</p>
      </div>

      <button type="submit" className="btn btn-primary cform__submit" disabled={submitting}>
        <span>{submitting ? '…' : t('contact.send')}</span>
        <Icon name="send" size={18} />
      </button>

      {success && (
        <p className="cform__success">
          <Icon name="check" size={18} /> <span>{t('contact.success')}</span>
        </p>
      )}
    </form>
  );
}
