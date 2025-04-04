import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BiFs-zWq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C_RWkgn_.mjs';
export { renderers } from '../renderers.mjs';

const $$Digesto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Digesto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "DigestoContainer", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/digesto/digesto", "client:component-export": "default" })} </div> ` })}`;
}, "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/digesto.astro", void 0);

const $$file = "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/digesto.astro";
const $$url = "/digesto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Digesto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
