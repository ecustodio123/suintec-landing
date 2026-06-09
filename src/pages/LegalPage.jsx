import { NavLink } from "react-router-dom";
import { useI18n } from "../lang/i18n";

const CONTENT = {
  privacy: {
    es: {
      title: "Política de Privacidad",
      updated: "Última actualización: junio de 2026",
      intro:
        "En SUINTEC respetamos tu privacidad y nos comprometemos a proteger los datos personales que nos confías. Esta política explica qué datos recopilamos, con qué finalidad y cómo puedes ejercer tus derechos.",
      sections: [
        {
          h: "Responsable del tratamiento",
          p: "SUINTEC es responsable del tratamiento de los datos personales recogidos a través de este sitio web. Para cualquier consulta sobre privacidad puedes escribirnos a ventas@suintecperu.com.",
        },
        {
          h: "Datos que recopilamos",
          p: "Solo recopilamos los datos que nos facilitas voluntariamente a través del formulario de contacto o por WhatsApp: nombre, teléfono, correo electrónico y la descripción de tu requerimiento.",
        },
        {
          h: "Finalidad y base legal",
          p: "Tratamos tus datos para atender tu consulta, elaborar cotizaciones y brindarte atención comercial. La base de este tratamiento es tu consentimiento, otorgado al enviarnos tu solicitud.",
        },
        {
          h: "Conservación",
          p: "Conservamos tus datos durante el tiempo necesario para gestionar tu solicitud y cumplir las obligaciones legales o contables que correspondan.",
        },
        {
          h: "Transferencia a terceros",
          p: "No vendemos tus datos. Únicamente podrían ser tratados por proveedores que nos prestan servicios (por ejemplo, gestión de correo o formularios), siempre bajo deberes de confidencialidad.",
        },
        {
          h: "Tus derechos",
          p: "Conforme a la Ley N.° 29733, Ley de Protección de Datos Personales del Perú, puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición escribiéndonos a ventas@suintecperu.com.",
        },
        {
          h: "Seguridad",
          p: "Aplicamos medidas técnicas y organizativas razonables para proteger tu información frente a accesos no autorizados, pérdida o alteración.",
        },
        {
          h: "Cambios en esta política",
          p: "Podemos actualizar esta política para reflejar mejoras o cambios legales. Publicaremos cualquier modificación en esta misma página.",
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      updated: "Last updated: June 2026",
      intro:
        "At SUINTEC we respect your privacy and are committed to protecting the personal data you entrust to us. This policy explains what data we collect, for what purpose, and how you can exercise your rights.",
      sections: [
        {
          h: "Data controller",
          p: "SUINTEC is responsible for the personal data collected through this website. For any privacy inquiry you can write to us at ventas@suintecperu.com.",
        },
        {
          h: "Data we collect",
          p: "We only collect the data you voluntarily provide through the contact form or via WhatsApp: name, phone, email, and the description of your request.",
        },
        {
          h: "Purpose and legal basis",
          p: "We process your data to handle your inquiry, prepare quotes, and provide commercial service. The basis for this processing is your consent, given when you send us your request.",
        },
        {
          h: "Retention",
          p: "We keep your data for as long as necessary to handle your request and to comply with applicable legal or accounting obligations.",
        },
        {
          h: "Transfer to third parties",
          p: "We do not sell your data. It may only be processed by providers that deliver services to us (for example, email or form management), always under confidentiality duties.",
        },
        {
          h: "Your rights",
          p: "Under Peruvian Law No. 29733 on Personal Data Protection, you may exercise your rights of access, rectification, cancellation, and objection by writing to ventas@suintecperu.com.",
        },
        {
          h: "Security",
          p: "We apply reasonable technical and organizational measures to protect your information against unauthorized access, loss, or alteration.",
        },
        {
          h: "Changes to this policy",
          p: "We may update this policy to reflect improvements or legal changes. Any modification will be published on this same page.",
        },
      ],
    },
  },
  terms: {
    es: {
      title: "Términos y Condiciones",
      updated: "Última actualización: junio de 2026",
      intro:
        "Estos Términos y Condiciones regulan el acceso y uso del sitio web de SUINTEC. Te pedimos leerlos con atención.",
      sections: [
        {
          h: "Aceptación",
          p: "El acceso y uso de este sitio web implica la aceptación plena de estos Términos y Condiciones. Si no estás de acuerdo, te pedimos no utilizarlo.",
        },
        {
          h: "Carácter informativo",
          p: "El contenido del sitio tiene fines informativos sobre los productos y servicios de SUINTEC y no constituye una oferta comercial vinculante.",
        },
        {
          h: "Cotizaciones y precios",
          p: "Las características, precios, disponibilidad y plazos de los equipos son referenciales y se confirman únicamente mediante una cotización formal emitida por SUINTEC.",
        },
        {
          h: "Propiedad intelectual",
          p: "Los contenidos, el logotipo y los elementos del sitio pertenecen a SUINTEC. Las marcas de terceros mostradas pertenecen a sus respectivos titulares y se utilizan con fines informativos.",
        },
        {
          h: "Enlaces y servicios de terceros",
          p: "El sitio puede incluir enlaces o herramientas de terceros (mapas, mensajería, formularios). SUINTEC no se responsabiliza por el contenido ni las políticas de dichos terceros.",
        },
        {
          h: "Limitación de responsabilidad",
          p: "SUINTEC no será responsable por decisiones tomadas únicamente sobre la base de la información referencial del sitio. Recomendamos validar cada equipo con nuestra asesoría técnica.",
        },
        {
          h: "Ley aplicable y jurisdicción",
          p: "Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia se someterá a los jueces y tribunales del distrito judicial de Lima.",
        },
        {
          h: "Contacto",
          p: "Para consultas sobre estos términos, escríbenos a ventas@suintecperu.com.",
        },
      ],
    },
    en: {
      title: "Terms and Conditions",
      updated: "Last updated: June 2026",
      intro:
        "These Terms and Conditions govern access to and use of the SUINTEC website. Please read them carefully.",
      sections: [
        {
          h: "Acceptance",
          p: "Accessing and using this website implies full acceptance of these Terms and Conditions. If you do not agree, please do not use it.",
        },
        {
          h: "Informational nature",
          p: "The site's content is for informational purposes about SUINTEC's products and services and does not constitute a binding commercial offer.",
        },
        {
          h: "Quotes and prices",
          p: "Equipment specifications, prices, availability, and lead times are for reference only and are confirmed solely through a formal quote issued by SUINTEC.",
        },
        {
          h: "Intellectual property",
          p: "The content, logo, and elements of the site belong to SUINTEC. Third-party brands shown belong to their respective owners and are used for informational purposes.",
        },
        {
          h: "Third-party links and services",
          p: "The site may include third-party links or tools (maps, messaging, forms). SUINTEC is not responsible for the content or policies of such third parties.",
        },
        {
          h: "Limitation of liability",
          p: "SUINTEC will not be liable for decisions made solely on the reference information of this site. We recommend validating each piece of equipment with our technical advice.",
        },
        {
          h: "Governing law and jurisdiction",
          p: "These terms are governed by the laws of the Republic of Peru. Any dispute will be submitted to the courts of the judicial district of Lima.",
        },
        {
          h: "Contact",
          p: "For questions about these terms, write to us at ventas@suintecperu.com.",
        },
      ],
    },
  },
};

function LegalPage({ doc }) {
  const { language, t } = useI18n();
  const data = CONTENT[doc][language] || CONTENT[doc].es;

  return (
    <main className="legal">
      <div className="wrap legal__inner">
        <h1>{data.title}</h1>
        <p className="legal__updated">{data.updated}</p>
        <p className="legal__intro">{data.intro}</p>
        {data.sections.map((section) => (
          <section key={section.h} className="legal__section">
            <h2>{section.h}</h2>
            <p>{section.p}</p>
          </section>
        ))}
        <NavLink to="/" className="btn btn-green legal__back">
          {t("pages.notFound.backHome")}
        </NavLink>
      </div>
    </main>
  );
}

export default LegalPage;
