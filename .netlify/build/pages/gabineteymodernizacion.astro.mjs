import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BiFs-zWq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C_RWkgn_.mjs';
export { renderers } from '../renderers.mjs';

const $$Gabineteymodernizacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Secretaria de Gabinete y Modernizaci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "PerfilGabineteModernizacion", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/perfiles/gabinetemodernizacion", "client:component-export": "default" })} </div> ` })}`;
}, "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/gabineteymodernizacion.astro", void 0);

const $$file = "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/gabineteymodernizacion.astro";
const $$url = "/gabineteymodernizacion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Gabineteymodernizacion,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
