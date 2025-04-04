import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro } from '../../chunks/astro/server_BiFs-zWq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_C_RWkgn_.mjs';
export { renderers } from '../../renderers.mjs';

const Blog = [{"id":1,"title":"Gustavo Saadi","description":"Este es un blog dedicado a los servicios y trámites municipales, presentado por Gustavo Saadi.","paginaBlog":[{"pagina":{"tituloPagina":"Gustavo Saadi","Articulo":[{"img":"/images/parquejumeal.webp","title":"Solicitud de Certificado de Línea Municipal","subtitle":"Requisitos y Procedimiento para Obtenerlo","description":"En este artículo se explican los pasos para solicitar el certificado de línea municipal, incluyendo los requisitos y la documentación necesaria. El Certificado de Línea Municipal es un documento clave que debes solicitar para ciertos trámites y proyectos urbanos. Aquí te explicamos todo lo que necesitas saber."},{"img":"/images/palacioMuni.jpg","title":"Solicitud de Visación de Plano para Prescripción Adquisitiva","subtitle":"Requisitos para la Visación de Planos en Prescripción Adquisitiva","description":"Este artículo detalla los requisitos y procedimientos necesarios para obtener la visación de planos en el proceso de prescripción adquisitiva. La prescripción adquisitiva es un proceso legal que permite adquirir la propiedad de un bien inmueble mediante su posesión continua y pacífica. Aquí te explicamos cómo gestionar la visación de planos para este trámite."}]}}]},{"id":2,"link":"2","title":"Secretario","description":"Ver","image":"/images/grid/guia.svg","facebook":"/images/grid/guia.svg","twitter":"","youtube":"","tiktok":"","instagram":"","paginaBlog":[{"pagina":{"tituloPagina":"Gustavo Saadi","Articulo":[{"img":"path/to/image1.jpg","title":"Solicitud de Certificado de Línea Municipal","seccion":""},{"img":"path/to/image2.jpg","title":"Solicitud de Visación de Plano para Prescripción Adquisitiva","link":"otra-opcion"}]},"paginaModal":{"tituloModal":"Trámites Catastrales - Modal","opciones":[{"img":"path/to/image1.jpg","title":"Solicitud de Certificado de Línea Municipal","description":"Descripción de la solicitud de certificado de línea municipal.","link":"certificado-linea-municipal"}]}}]}];

const $$Astro = createAstro();
function getStaticPaths() {
  return Blog.map((t) => ({
    params: { id: t.id.toString() }
    // Convert ID to string
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const blog = Blog.find((t) => t.id === parseInt(id, 10));
  if (!blog) {
    throw new Error("Blog not found");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": blog.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogPage", null, { "client:only": "react", "blog": blog, "client:component-hydration": "only", "client:component-path": "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/blog/blog", "client:component-export": "default" })} ` })}`;
}, "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/blog/[id].astro", void 0);

const $$file = "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
