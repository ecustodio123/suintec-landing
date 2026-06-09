import { useState } from "react";
import { useI18n } from "../../lang/i18n";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/ventas@suintecperu.com";
const EMAILS = ["ventas@suintecperu.com", "administracion@suintecperu.com"];

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

function ContactBlock() {
  const { t } = useI18n();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      if (data.success) {
        setStatus("ok");
        form.reset();
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const submitLabel =
    status === "sending"
      ? t("contactBlock.sending")
      : status === "ok"
        ? t("contactBlock.okShort")
        : status === "error"
          ? t("contactBlock.errorShort")
          : t("contactBlock.submit");

  return (
    <section id="contacto">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>{t("contactBlock.title")}</h2>
          <p>{t("contactBlock.description")}</p>
        </div>
        <div className="contact-grid">
          <form className="form reveal" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Nueva solicitud desde sitio web SUINTEC" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
            <input type="text" name="nombre" placeholder={t("contactBlock.fields.fullName")} required />
            <input type="tel" name="telefono" placeholder={t("contactBlock.fields.phone")} required />
            <input className="full" type="email" name="email" placeholder={t("contactBlock.fields.email")} required />
            <select className="full" name="producto" required defaultValue="">
              <option value="" disabled>
                {t("contactBlock.fields.interestedIn")}
              </option>
              <option>{t("contactBlock.options.option1")}</option>
              <option>{t("contactBlock.options.option2")}</option>
              <option>{t("contactBlock.options.option3")}</option>
              <option>{t("contactBlock.options.option4")}</option>
              <option>{t("contactBlock.options.option5")}</option>
            </select>
            <textarea className="full" name="mensaje" placeholder={t("contactBlock.fields.message")} />
            <button type="submit" className="btn btn-green btn-block full" disabled={status === "sending"}>
              {submitLabel}
            </button>
          </form>

          <div className="info reveal">
            <div className="info-block">
              <h4>{t("contactBlock.infoTitle")}</h4>
              <p>
                <span className="info-label">{t("contactBlock.info.addressLabel")}:</span> {t("business.address")}
              </p>
              <p>
                <span className="info-label">{t("contactBlock.whatsappLabel")}:</span> {t("business.phoneDisplay")}
              </p>
              <p>
                <span className="info-label">{t("contactBlock.info.scheduleLabel")}:</span> {t("contactBlock.info.scheduleValue")}
              </p>
              <p>
                <span className="info-label">{t("contactBlock.info.emailsLabel")}:</span>
              </p>
              <ul className="contact-emails">
                {EMAILS.map((email) => (
                  <li key={email}>
                    <MailIcon /> {email}
                  </li>
                ))}
              </ul>
            </div>
            <div className="map">
              <iframe
                title={t("contactBlock.mapTitle")}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.7!2d-76.9846874!3d-12.0767448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6499bd498cb%3A0xfcc03880cd068324!2sGarcilazo%20de%20la%20Vega%2C%20Ate%2015022!5e0!3m2!1ses!2spe!4v1"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactBlock;
