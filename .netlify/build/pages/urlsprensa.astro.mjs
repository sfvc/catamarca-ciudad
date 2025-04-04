import { e as createComponent, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_BiFs-zWq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C_RWkgn_.mjs';
export { renderers } from '../renderers.mjs';

const $$UrlsPrensa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Busca las ultimas novedades" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "UrlsPrensa", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/urlsPrensa/UrlsPresa", "client:component-export": "default" })} ` })}`;
}, "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/urlsPrensa.astro", void 0);

const $$file = "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/urlsPrensa.astro";
const $$url = "/urlsPrensa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$UrlsPrensa,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
