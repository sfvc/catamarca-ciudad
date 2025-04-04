import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro } from '../chunks/astro/server_BiFs-zWq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C_RWkgn_.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CategoriasServicioVecino = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoriasServicioVecino;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios al Vecino" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GridPage", null, { "client:only": "react", "href": "/serviciosVecino", "endpoint": "items/servicioVecino_categoria", "titulo": "Gu\xEDa de Servicios al Vecino", "client:component-hydration": "only", "client:component-path": "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/grid/gridPage", "client:component-export": "default" })} ` })}`;
}, "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/categoriasServicioVecino.astro", void 0);

const $$file = "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/categoriasServicioVecino.astro";
const $$url = "/categoriasServicioVecino";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CategoriasServicioVecino,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
