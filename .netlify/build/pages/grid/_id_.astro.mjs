import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro } from '../../chunks/astro/server_BiFs-zWq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_C_RWkgn_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "titulo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GridPage", null, { "client:only": "react", "grid": "", "client:component-hydration": "only", "client:component-path": "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/grid/gridPage", "client:component-export": "default" })} ` })}`;
}, "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/grid/[id].astro", void 0);

const $$file = "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/grid/[id].astro";
const $$url = "/grid/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
