import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BSIxQ1ZP.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog/_id_.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/buscador.astro.mjs');
const _page4 = () => import('./pages/buscadorsfvc.astro.mjs');
const _page5 = () => import('./pages/categoriascompra.astro.mjs');
const _page6 = () => import('./pages/categoriasdatosabiertos.astro.mjs');
const _page7 = () => import('./pages/categoriasgeoportal.astro.mjs');
const _page8 = () => import('./pages/categoriasportalgde.astro.mjs');
const _page9 = () => import('./pages/categoriasserviciovecino.astro.mjs');
const _page10 = () => import('./pages/categoriastramites.astro.mjs');
const _page11 = () => import('./pages/compra/_id_.astro.mjs');
const _page12 = () => import('./pages/datosabiertos/_id_.astro.mjs');
const _page13 = () => import('./pages/digesto.astro.mjs');
const _page14 = () => import('./pages/edificiospublicos.astro.mjs');
const _page15 = () => import('./pages/gabineteymodernizacion.astro.mjs');
const _page16 = () => import('./pages/geoportal/_id_.astro.mjs');
const _page17 = () => import('./pages/grid/_id_.astro.mjs');
const _page18 = () => import('./pages/infocompra/_id_.astro.mjs');
const _page19 = () => import('./pages/infodatosabiertos/_id_.astro.mjs');
const _page20 = () => import('./pages/infogeoportal/_id_.astro.mjs');
const _page21 = () => import('./pages/infoportalgde/_id_.astro.mjs');
const _page22 = () => import('./pages/infoserviciovecino/_id_.astro.mjs');
const _page23 = () => import('./pages/infotramites/_id_.astro.mjs');
const _page24 = () => import('./pages/intendente.astro.mjs');
const _page25 = () => import('./pages/layout/layout.astro.mjs');
const _page26 = () => import('./pages/perfil/_id_.astro.mjs');
const _page27 = () => import('./pages/perfil.astro.mjs');
const _page28 = () => import('./pages/portalgde/_id_.astro.mjs');
const _page29 = () => import('./pages/radio.astro.mjs');
const _page30 = () => import('./pages/serviciosvecino/_id_.astro.mjs');
const _page31 = () => import('./pages/tramites/_id_.astro.mjs');
const _page32 = () => import('./pages/urlsprensa.astro.mjs');
const _page33 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/[id].astro", _page1],
    ["src/pages/blog.astro", _page2],
    ["src/pages/buscador.astro", _page3],
    ["src/pages/buscadorSFVC.astro", _page4],
    ["src/pages/categoriasCompra.astro", _page5],
    ["src/pages/categoriasDatosAbiertos.astro", _page6],
    ["src/pages/categoriasGeoPortal.astro", _page7],
    ["src/pages/categoriasPortalGDE.astro", _page8],
    ["src/pages/categoriasServicioVecino.astro", _page9],
    ["src/pages/categoriasTramites.astro", _page10],
    ["src/pages/compra/[id].astro", _page11],
    ["src/pages/datosAbiertos/[id].astro", _page12],
    ["src/pages/digesto.astro", _page13],
    ["src/pages/edificiospublicos.astro", _page14],
    ["src/pages/gabineteymodernizacion.astro", _page15],
    ["src/pages/geoPortal/[id].astro", _page16],
    ["src/pages/grid/[id].astro", _page17],
    ["src/pages/infoCompra/[id].astro", _page18],
    ["src/pages/infoDatosAbiertos/[id].astro", _page19],
    ["src/pages/infoGeoPortal/[id].astro", _page20],
    ["src/pages/infoPortalGDE/[id].astro", _page21],
    ["src/pages/infoServicioVecino/[id].astro", _page22],
    ["src/pages/infoTramites/[id].astro", _page23],
    ["src/pages/Intendente.astro", _page24],
    ["src/pages/layout/Layout.astro", _page25],
    ["src/pages/perfil/[id].astro", _page26],
    ["src/pages/perfil.astro", _page27],
    ["src/pages/portalGDE/[id].astro", _page28],
    ["src/pages/radio.astro", _page29],
    ["src/pages/serviciosVecino/[id].astro", _page30],
    ["src/pages/tramites/[id].astro", _page31],
    ["src/pages/urlsPrensa.astro", _page32],
    ["src/pages/index.astro", _page33]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bebc02f2-11f3-4951-b615-cb70b9fcabd3"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
