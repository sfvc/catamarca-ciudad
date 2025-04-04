import { e as createComponent, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_BiFs-zWq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C_RWkgn_.mjs';
export { renderers } from '../renderers.mjs';

const $$BuscadorSFVC = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Busca las ultimas novedades" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BuscadorMain", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/buscadorMain/buscadorIndex", "client:component-export": "default" })} ` })}`;
}, "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/buscadorSFVC.astro", void 0);

const $$file = "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/buscadorSFVC.astro";
const $$url = "/buscadorSFVC";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$BuscadorSFVC,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
