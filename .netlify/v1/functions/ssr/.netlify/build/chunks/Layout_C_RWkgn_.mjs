import { e as createComponent, r as renderTemplate, i as renderComponent, l as renderHead, n as renderScript, h as createAstro, o as renderSlot } from './astro/server_BiFs-zWq.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Catamarca Capital - Municipalidad SFVC</title><meta name="description" content="Pagina Oficial de la Municipalidad de San Fernando del Valle de Catamarca"><meta name="author" content="Presidencia de la Naci\xF3n"><link rel="shortcut icon" href="/images/muni-logo-removebg.png"><meta name="theme-color" content="#242C4F"><meta name="msapplication-navbutton-color" content="#242C4F"><meta name="apple-mobile-web-app-status-bar-style" content="#242C4F"><meta property="og:url" content="/images/muni-logo.jpg"><meta property="og:type" content="article"><meta property="og:title" content="Catamarca Capital - Municipalidad SFVC"><meta property="og:description" content="Pagina Oficial de la Municipalidad de San Fernando del Valle de Catamarca"><meta property="og:image" content="/images/muni-logo.jpg"><meta property="og:locale" content="es_AR"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="Catamarca Capital - Municipalidad SFVC"><meta name="twitter:description" content="Pagina Oficial de la Municipalidad de San Fernando del Valle de Catamarca"><meta name="twitter:image" content="/images/muni-logo.jpg"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">', '<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"><\/script><link href="https://cdn.jsdelivr.net/gh/argob/poncho@master/dist/css/encode-fontface.css" rel="stylesheet"><link href="https://cdn.jsdelivr.net/gh/argob/poncho@master/dist/css/poncho.min.css" rel="stylesheet"><link href="https://cdn.jsdelivr.net/gh/argob/poncho@master/dist/css/documentacion.css" rel="stylesheet"><link href="https://cdn.jsdelivr.net/gh/argob/poncho@master/dist/css/icono-arg.css" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"><title>', "</title>", "</head> ", " </html>"])), renderScript($$result, "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/layout/Layout.astro?astro&type=script&index=0&lang.ts"), title, renderHead(), renderComponent($$result, "App", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/layout/app", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/common/header", "client:component-export": "default" })} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/common/footer", "client:component-export": "default" })} ` }));
}, "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/layout/Layout.astro", void 0);

const $$file = "C:/front-end/Municipalidad/catamarca-ciudad/src/pages/layout/Layout.astro";
const $$url = "/layout/Layout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Layout,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _page as _ };
