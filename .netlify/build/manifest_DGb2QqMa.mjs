import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { j as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_BiFs-zWq.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/front-end/Municipalidad/catamarca-ciudad/","cacheDir":"file:///C:/front-end/Municipalidad/catamarca-ciudad/node_modules/.astro/","outDir":"file:///C:/front-end/Municipalidad/catamarca-ciudad/dist/","srcDir":"file:///C:/front-end/Municipalidad/catamarca-ciudad/src/","publicDir":"file:///C:/front-end/Municipalidad/catamarca-ciudad/public/","buildClientDir":"file:///C:/front-end/Municipalidad/catamarca-ciudad/dist/","buildServerDir":"file:///C:/front-end/Municipalidad/catamarca-ciudad/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/blog/[id]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/blog/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/buscador","isIndex":false,"type":"page","pattern":"^\\/buscador\\/?$","segments":[[{"content":"buscador","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/buscador.astro","pathname":"/buscador","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/buscadorsfvc","isIndex":false,"type":"page","pattern":"^\\/buscadorSFVC\\/?$","segments":[[{"content":"buscadorSFVC","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/buscadorSFVC.astro","pathname":"/buscadorSFVC","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/categoriascompra","isIndex":false,"type":"page","pattern":"^\\/categoriasCompra\\/?$","segments":[[{"content":"categoriasCompra","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categoriasCompra.astro","pathname":"/categoriasCompra","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/categoriasdatosabiertos","isIndex":false,"type":"page","pattern":"^\\/categoriasDatosAbiertos\\/?$","segments":[[{"content":"categoriasDatosAbiertos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categoriasDatosAbiertos.astro","pathname":"/categoriasDatosAbiertos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/categoriasgeoportal","isIndex":false,"type":"page","pattern":"^\\/categoriasGeoPortal\\/?$","segments":[[{"content":"categoriasGeoPortal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categoriasGeoPortal.astro","pathname":"/categoriasGeoPortal","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/categoriasportalgde","isIndex":false,"type":"page","pattern":"^\\/categoriasPortalGDE\\/?$","segments":[[{"content":"categoriasPortalGDE","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categoriasPortalGDE.astro","pathname":"/categoriasPortalGDE","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/categoriasserviciovecino","isIndex":false,"type":"page","pattern":"^\\/categoriasServicioVecino\\/?$","segments":[[{"content":"categoriasServicioVecino","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categoriasServicioVecino.astro","pathname":"/categoriasServicioVecino","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/categoriastramites","isIndex":false,"type":"page","pattern":"^\\/categoriasTramites\\/?$","segments":[[{"content":"categoriasTramites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categoriasTramites.astro","pathname":"/categoriasTramites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/compra/[id]","isIndex":false,"type":"page","pattern":"^\\/compra\\/([^/]+?)\\/?$","segments":[[{"content":"compra","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/compra/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/datosabiertos/[id]","isIndex":false,"type":"page","pattern":"^\\/datosAbiertos\\/([^/]+?)\\/?$","segments":[[{"content":"datosAbiertos","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/datosAbiertos/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/digesto","isIndex":false,"type":"page","pattern":"^\\/digesto\\/?$","segments":[[{"content":"digesto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/digesto.astro","pathname":"/digesto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"},{"type":"external","src":"/_astro/leaflet.CIGW-MKW.css"}],"routeData":{"route":"/edificiospublicos","isIndex":false,"type":"page","pattern":"^\\/edificiospublicos\\/?$","segments":[[{"content":"edificiospublicos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/edificiospublicos.astro","pathname":"/edificiospublicos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/gabineteymodernizacion","isIndex":false,"type":"page","pattern":"^\\/gabineteymodernizacion\\/?$","segments":[[{"content":"gabineteymodernizacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gabineteymodernizacion.astro","pathname":"/gabineteymodernizacion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/geoportal/[id]","isIndex":false,"type":"page","pattern":"^\\/geoPortal\\/([^/]+?)\\/?$","segments":[[{"content":"geoPortal","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/geoPortal/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/grid/[id]","isIndex":false,"type":"page","pattern":"^\\/grid\\/([^/]+?)\\/?$","segments":[[{"content":"grid","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/grid/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/infocompra/[id]","isIndex":false,"type":"page","pattern":"^\\/infoCompra\\/([^/]+?)\\/?$","segments":[[{"content":"infoCompra","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/infoCompra/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/infodatosabiertos/[id]","isIndex":false,"type":"page","pattern":"^\\/infoDatosAbiertos\\/([^/]+?)\\/?$","segments":[[{"content":"infoDatosAbiertos","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/infoDatosAbiertos/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/infogeoportal/[id]","isIndex":false,"type":"page","pattern":"^\\/infoGeoPortal\\/([^/]+?)\\/?$","segments":[[{"content":"infoGeoPortal","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/infoGeoPortal/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/infoportalgde/[id]","isIndex":false,"type":"page","pattern":"^\\/infoPortalGDE\\/([^/]+?)\\/?$","segments":[[{"content":"infoPortalGDE","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/infoPortalGDE/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/infoserviciovecino/[id]","isIndex":false,"type":"page","pattern":"^\\/infoServicioVecino\\/([^/]+?)\\/?$","segments":[[{"content":"infoServicioVecino","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/infoServicioVecino/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/infotramites/[id]","isIndex":false,"type":"page","pattern":"^\\/infoTramites\\/([^/]+?)\\/?$","segments":[[{"content":"infoTramites","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/infoTramites/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/intendente","isIndex":false,"type":"page","pattern":"^\\/Intendente\\/?$","segments":[[{"content":"Intendente","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Intendente.astro","pathname":"/Intendente","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/layout/layout","isIndex":false,"type":"page","pattern":"^\\/layout\\/Layout\\/?$","segments":[[{"content":"layout","dynamic":false,"spread":false}],[{"content":"Layout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/layout/Layout.astro","pathname":"/layout/Layout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/perfil/[id]","isIndex":false,"type":"page","pattern":"^\\/perfil\\/([^/]+?)\\/?$","segments":[[{"content":"perfil","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/perfil/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/perfil","isIndex":false,"type":"page","pattern":"^\\/perfil\\/?$","segments":[[{"content":"perfil","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/perfil.astro","pathname":"/perfil","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/portalgde/[id]","isIndex":false,"type":"page","pattern":"^\\/portalGDE\\/([^/]+?)\\/?$","segments":[[{"content":"portalGDE","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/portalGDE/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/radio","isIndex":false,"type":"page","pattern":"^\\/radio\\/?$","segments":[[{"content":"radio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/radio.astro","pathname":"/radio","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/serviciosvecino/[id]","isIndex":false,"type":"page","pattern":"^\\/serviciosVecino\\/([^/]+?)\\/?$","segments":[[{"content":"serviciosVecino","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/serviciosVecino/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/tramites/[id]","isIndex":false,"type":"page","pattern":"^\\/tramites\\/([^/]+?)\\/?$","segments":[[{"content":"tramites","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/tramites/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"}],"routeData":{"route":"/urlsprensa","isIndex":false,"type":"page","pattern":"^\\/urlsPrensa\\/?$","segments":[[{"content":"urlsPrensa","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/urlsPrensa.astro","pathname":"/urlsPrensa","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BmzXjDx_.css"},{"type":"external","src":"/_astro/home.Cacu5y9W.css"},{"type":"external","src":"/_astro/leaflet.CIGW-MKW.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/layout/Layout.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/Intendente.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/blog/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/buscador.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/buscadorSFVC.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/categoriasCompra.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/categoriasDatosAbiertos.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/categoriasGeoPortal.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/categoriasPortalGDE.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/categoriasServicioVecino.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/categoriasTramites.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/compra/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/datosAbiertos/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/digesto.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/edificiospublicos.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/gabineteymodernizacion.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/geoPortal/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/grid/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/infoCompra/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/infoDatosAbiertos/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/infoGeoPortal/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/infoPortalGDE/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/infoServicioVecino/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/infoTramites/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/perfil.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/perfil/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/portalGDE/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/radio.astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/serviciosVecino/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/tramites/[id].astro",{"propagation":"none","containsHead":true}],["C:/front-end/Municipalidad/catamarca-ciudad/src/pages/urlsPrensa.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/blog/[id]@_@astro":"pages/blog/_id_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/buscador@_@astro":"pages/buscador.astro.mjs","\u0000@astro-page:src/pages/buscadorSFVC@_@astro":"pages/buscadorsfvc.astro.mjs","\u0000@astro-page:src/pages/categoriasCompra@_@astro":"pages/categoriascompra.astro.mjs","\u0000@astro-page:src/pages/categoriasDatosAbiertos@_@astro":"pages/categoriasdatosabiertos.astro.mjs","\u0000@astro-page:src/pages/categoriasGeoPortal@_@astro":"pages/categoriasgeoportal.astro.mjs","\u0000@astro-page:src/pages/categoriasPortalGDE@_@astro":"pages/categoriasportalgde.astro.mjs","\u0000@astro-page:src/pages/categoriasServicioVecino@_@astro":"pages/categoriasserviciovecino.astro.mjs","\u0000@astro-page:src/pages/categoriasTramites@_@astro":"pages/categoriastramites.astro.mjs","\u0000@astro-page:src/pages/compra/[id]@_@astro":"pages/compra/_id_.astro.mjs","\u0000@astro-page:src/pages/datosAbiertos/[id]@_@astro":"pages/datosabiertos/_id_.astro.mjs","\u0000@astro-page:src/pages/digesto@_@astro":"pages/digesto.astro.mjs","\u0000@astro-page:src/pages/edificiospublicos@_@astro":"pages/edificiospublicos.astro.mjs","\u0000@astro-page:src/pages/gabineteymodernizacion@_@astro":"pages/gabineteymodernizacion.astro.mjs","\u0000@astro-page:src/pages/geoPortal/[id]@_@astro":"pages/geoportal/_id_.astro.mjs","\u0000@astro-page:src/pages/grid/[id]@_@astro":"pages/grid/_id_.astro.mjs","\u0000@astro-page:src/pages/infoCompra/[id]@_@astro":"pages/infocompra/_id_.astro.mjs","\u0000@astro-page:src/pages/infoDatosAbiertos/[id]@_@astro":"pages/infodatosabiertos/_id_.astro.mjs","\u0000@astro-page:src/pages/infoGeoPortal/[id]@_@astro":"pages/infogeoportal/_id_.astro.mjs","\u0000@astro-page:src/pages/infoPortalGDE/[id]@_@astro":"pages/infoportalgde/_id_.astro.mjs","\u0000@astro-page:src/pages/infoServicioVecino/[id]@_@astro":"pages/infoserviciovecino/_id_.astro.mjs","\u0000@astro-page:src/pages/infoTramites/[id]@_@astro":"pages/infotramites/_id_.astro.mjs","\u0000@astro-page:src/pages/Intendente@_@astro":"pages/intendente.astro.mjs","\u0000@astro-page:src/pages/layout/Layout@_@astro":"pages/layout/layout.astro.mjs","\u0000@astro-page:src/pages/perfil/[id]@_@astro":"pages/perfil/_id_.astro.mjs","\u0000@astro-page:src/pages/perfil@_@astro":"pages/perfil.astro.mjs","\u0000@astro-page:src/pages/portalGDE/[id]@_@astro":"pages/portalgde/_id_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/radio@_@astro":"pages/radio.astro.mjs","\u0000@astro-page:src/pages/serviciosVecino/[id]@_@astro":"pages/serviciosvecino/_id_.astro.mjs","\u0000@astro-page:src/pages/tramites/[id]@_@astro":"pages/tramites/_id_.astro.mjs","\u0000@astro-page:src/pages/urlsPrensa@_@astro":"pages/urlsprensa.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DGb2QqMa.mjs","C:/front-end/Municipalidad/catamarca-ciudad/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/front-end/Municipalidad/catamarca-ciudad/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_53NqYoRK.mjs","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/layout/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DRAX02vR.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/buscador/buscador":"_astro/buscador.Cjbt0L2z.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/buscadorMain/buscadorIndex":"_astro/buscadorIndex.DrTwDeMI.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/blog/blog":"_astro/blog.Cf1m24cA.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/grid/gridCategorias":"_astro/gridCategorias.kZOo3-A4.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/digesto/digesto":"_astro/digesto.C6bhVS7c.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/perfiles/gabinetemodernizacion":"_astro/gabinetemodernizacion.C_HwIEbQ.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/info/info":"_astro/info.Dd_0m7fE.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/perfiles/Intendente":"_astro/Intendente.CLq3rQFL.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/common/footer":"_astro/footer.CzLm5ncN.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/radio/radioIndex":"_astro/radioIndex.BMhgs2xF.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/urlsPrensa/UrlsPresa":"_astro/UrlsPresa.6ehCIHGn.js","@astrojs/react/client.js":"_astro/client.l85lcPB3.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/perfiles/perfil":"_astro/perfil.OZkMoUzG.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/common/header":"_astro/header.BDV7Dd71.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/layout/app":"_astro/app.Dnu-qvr5.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/home/home":"_astro/home.CRaKIoQs.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/edificiospublicos/edificiospublicos":"_astro/edificiospublicos.Bx4NIggr.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/components/grid/gridPage":"_astro/gridPage.BZBjAYUx.js","C:/front-end/Municipalidad/catamarca-ciudad/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DRAX02vR.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.BmzXjDx_.css","/favicon.svg","/_astro/app.Dnu-qvr5.js","/_astro/blog.Cf1m24cA.js","/_astro/buscador.Cjbt0L2z.js","/_astro/buscadorIndex.DrTwDeMI.js","/_astro/catamarcaApi.CNm0Iuu3.js","/_astro/client.l85lcPB3.js","/_astro/digesto.C6bhVS7c.js","/_astro/edificiospublicos.Bx4NIggr.js","/_astro/footer.CzLm5ncN.js","/_astro/gabinetemodernizacion.C_HwIEbQ.js","/_astro/gridCategorias.kZOo3-A4.js","/_astro/gridPage.BZBjAYUx.js","/_astro/header.BDV7Dd71.js","/_astro/home.Cacu5y9W.css","/_astro/home.CRaKIoQs.js","/_astro/index.astro_astro_type_script_index_0_lang.DRAX02vR.js","/_astro/index.C17Z0mLS.js","/_astro/index.Cb2GqDXq.js","/_astro/index.CMFigVup.js","/_astro/index.D2MAbzvX.js","/_astro/info.Dd_0m7fE.js","/_astro/Intendente.CLq3rQFL.js","/_astro/jsx-runtime.CDeAccHH.js","/_astro/Layout.astro_astro_type_script_index_0_lang.DRAX02vR.js","/_astro/leaflet.CIGW-MKW.css","/_astro/modal.yyb3vdoT.js","/_astro/modalMobile.DJZiF_YG.js","/_astro/perfil.OZkMoUzG.js","/_astro/portal.Db0QF95D.js","/_astro/radioIndex.BMhgs2xF.js","/_astro/UrlsPresa.6ehCIHGn.js","/images/arrowback.svg","/images/arrownext.svg","/images/avatar.svg","/images/buildin","/images/cajaCredit.png","/images/calendar.svg","/images/chequeado.svg","/images/costos.svg","/images/decretoAside.svg","/images/digesto.svg","/images/documento.svg","/images/escarapela.svg","/images/externalLink.svg","/images/facebook.svg","/images/flechaabajo.svg","/images/grafico-circular.svg","/images/gustavo.jpg","/images/info.svg","/images/instagram.svg","/images/lacapitalmegusta-bgnone.png","/images/link.svg","/images/logo-new-2020.png","/images/logo-new-2020.svg","/images/lupa.svg","/images/mail.svg","/images/mapPointer.svg","/images/mariano.jpeg","/images/marker.svg","/images/menu.svg","/images/mic.png","/images/muni-logo-removebg.png","/images/muni-logo.jpg","/images/palacioMuni.jpg","/images/parquejumeal.webp","/images/pdf.svg","/images/radiomunicipal.png","/images/reloj.svg","/images/requisitos.svg","/images/Saadi-Plaza.webp","/images/search.svg","/images/solPatrio.svg","/images/tramiteDefault.svg","/images/twitter.svg","/images/volver.svg","/images/wsp.svg","/images/youtube.svg","/images/iconos-btn/facebook2.svg","/images/iconos-btn/facebook3.svg","/images/iconos-btn/instagram2.svg","/images/iconos-btn/instagram3.svg","/images/iconos-btn/tiktok2.svg","/images/iconos-btn/tiktok3.svg","/images/iconos-btn/twitter2.svg","/images/iconos-btn/twitter3.svg","/images/iconos-btn/wsp2.svg","/images/iconos-btn/wsp3.svg","/images/iconos-btn/youtube2.svg","/images/iconos-btn/youtube3.svg","/images/adaptabilidad/arrowup.svg","/images/adaptabilidad/daltonismo.svg","/images/adaptabilidad/dislesxia.svg","/images/adaptabilidad/enlaces.svg","/images/adaptabilidad/lineaGuia.svg","/images/adaptabilidad/temas.svg","/images/adaptabilidad/textHeight.svg","/images/adaptabilidad/universalAccess.svg","/images/grid/appcatamarca.svg","/images/grid/aprobacion.svg","/images/grid/arbol.svg","/images/grid/arte.svg","/images/grid/aviso.svg","/images/grid/bromatologia.svg","/images/grid/cajaCredit.svg","/images/grid/calendar.svg","/images/grid/cambio.svg","/images/grid/carnetConducir.svg","/images/grid/catrastal.svg","/images/grid/cementerio.svg","/images/grid/certificado.svg","/images/grid/compra.svg","/images/grid/compraColor.svg","/images/grid/construccion.svg","/images/grid/culturaDeporte.svg","/images/grid/datosabiertos.svg","/images/grid/datosAlfanumericos.svg","/images/grid/decretosBoletines.svg","/images/grid/denuncia.svg","/images/grid/descarga.svg","/images/grid/desistimiento.svg","/images/grid/digesto.svg","/images/grid/discapacitado.svg","/images/grid/docente.svg","/images/grid/empleoCapacitacion.svg","/images/grid/fiscalizacionObra.svg","/images/grid/gobierno.svg","/images/grid/guia.svg","/images/grid/haberes.svg","/images/grid/habilitacionComercial.svg","/images/grid/info.svg","/images/grid/infraestructuradatos.svg","/images/grid/inspeccionGeneral.svg","/images/grid/juzgadoFalta.svg","/images/grid/limpieza.svg","/images/grid/link.svg","/images/grid/mapa.svg","/images/grid/park.svg","/images/grid/planeamientoUrbano.svg","/images/grid/planos.svg","/images/grid/poda.svg","/images/grid/programa.svg","/images/grid/provedor.svg","/images/grid/rentas.svg","/images/grid/salud.svg","/images/grid/serviciosmunicipales.svg","/images/grid/test.svg","/images/grid/tickets.svg","/images/grid/transitoMunicipal.svg","/images/grid/turismo.svg","/images/grid/vial.svg","/images/grid/video.svg","/images/grid/visado.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"XfGqSuKs4uA8ztKyCGmU8V+5h6KsMiiWhQgnxCH8dUs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
