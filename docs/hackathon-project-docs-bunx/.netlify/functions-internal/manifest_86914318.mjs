import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_3555f0b8.mjs';
import 'mime';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#13151a;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.astro-a[data-astro-cid-j7pv25f6]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-j7pv25f6]{font-weight:700;line-height:1;text-align:center}.text-gradient[data-astro-cid-j7pv25f6]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.instructions[data-astro-cid-j7pv25f6]{margin-bottom:2rem;border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:1.5rem;border-radius:8px}.instructions[data-astro-cid-j7pv25f6] code[data-astro-cid-j7pv25f6]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-j7pv25f6] strong[data-astro-cid-j7pv25f6]{color:rgb(var(--accent-light))}.link-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/authentication_and_authorization","type":"page","pattern":"^\\/sections\\/authentication_and_authorization\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"authentication_and_authorization","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/authentication_and_authorization.mdx","pathname":"/sections/authentication_and_authorization","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/troubleshooting_and_debugging","type":"page","pattern":"^\\/sections\\/troubleshooting_and_debugging\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"troubleshooting_and_debugging","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/troubleshooting_and_debugging.mdx","pathname":"/sections/troubleshooting_and_debugging","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/setting_up_the_environment","type":"page","pattern":"^\\/sections\\/setting_up_the_environment\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"setting_up_the_environment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/setting_up_the_environment.mdx","pathname":"/sections/setting_up_the_environment","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/scaling_and_performance","type":"page","pattern":"^\\/sections\\/scaling_and_performance\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"scaling_and_performance","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/scaling_and_performance.mdx","pathname":"/sections/scaling_and_performance","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/third-party_services","type":"page","pattern":"^\\/sections\\/third-party_services\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"third-party_services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/third-party_services.mdx","pathname":"/sections/third-party_services","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/directory_structure","type":"page","pattern":"^\\/sections\\/directory_structure\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"directory_structure","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/directory_structure.mdx","pathname":"/sections/directory_structure","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/acknowledgments","type":"page","pattern":"^\\/sections\\/acknowledgments\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"acknowledgments","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/acknowledgments.mdx","pathname":"/sections/acknowledgments","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/architecture","type":"page","pattern":"^\\/sections\\/architecture\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"architecture","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/architecture.mdx","pathname":"/sections/architecture","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/introduction","type":"page","pattern":"^\\/sections\\/introduction\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"introduction","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/introduction.mdx","pathname":"/sections/introduction","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/appendices","type":"page","pattern":"^\\/sections\\/appendices\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"appendices","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/appendices.mdx","pathname":"/sections/appendices","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sections/components","type":"endpoint","pattern":"^\\/sections\\/components$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"components","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/components/index.ts","pathname":"/sections/components","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/conclusion","type":"page","pattern":"^\\/sections\\/conclusion\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"conclusion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/conclusion.mdx","pathname":"/sections/conclusion","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/deployment","type":"page","pattern":"^\\/sections\\/deployment\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"deployment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/deployment.mdx","pathname":"/sections/deployment","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/references","type":"page","pattern":"^\\/sections\\/references\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"references","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/references.mdx","pathname":"/sections/references","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/data_flow","type":"page","pattern":"^\\/sections\\/data_flow\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"data_flow","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/data_flow.mdx","pathname":"/sections/data_flow","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/abstract","type":"page","pattern":"^\\/sections\\/abstract\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"abstract","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/abstract.mdx","pathname":"/sections/abstract","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/database","type":"page","pattern":"^\\/sections\\/database\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"database","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/database.mdx","pathname":"/sections/database","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/frontend","type":"page","pattern":"^\\/sections\\/frontend\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"frontend","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/frontend.mdx","pathname":"/sections/frontend","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/backend","type":"page","pattern":"^\\/sections\\/backend\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"backend","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/backend.mdx","pathname":"/sections/backend","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/sections/testing","type":"page","pattern":"^\\/sections\\/testing\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"testing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/testing.mdx","pathname":"/sections/testing","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.7148c072.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/about.astro":"chunks/pages/about_10323a0e.mjs","/src/pages/sections/acknowledgments.mdx":"chunks/pages/acknowledgments_db2b9f66.mjs","/src/pages/sections/appendices.mdx":"chunks/pages/appendices_336e53b8.mjs","/src/pages/sections/architecture.mdx":"chunks/pages/architecture_f5f0cf6b.mjs","/src/pages/sections/authentication_and_authorization.mdx":"chunks/pages/authentication_and_authorization_d242f382.mjs","/src/pages/sections/backend.mdx":"chunks/pages/backend_338f24c3.mjs","/src/pages/sections/conclusion.mdx":"chunks/pages/conclusion_a20bd081.mjs","/src/pages/sections/data_flow.mdx":"chunks/pages/data_flow_5fb56861.mjs","/src/pages/sections/database.mdx":"chunks/pages/database_de54d82e.mjs","/src/pages/sections/deployment.mdx":"chunks/pages/deployment_64636e05.mjs","/src/pages/sections/directory_structure.mdx":"chunks/pages/directory_structure_33a870e0.mjs","/src/pages/sections/frontend.mdx":"chunks/pages/frontend_f33026d6.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_36e48144.mjs","/src/pages/index.astro":"chunks/pages/index_5c24ce20.mjs","/src/pages/sections/components/index.ts":"chunks/pages/index_da9fb32c.mjs","/src/pages/sections/introduction.mdx":"chunks/pages/introduction_e20dbc11.mjs","/src/pages/sections/references.mdx":"chunks/pages/references_b23bc6ca.mjs","/src/pages/sections/scaling_and_performance.mdx":"chunks/pages/scaling_and_performance_758d2757.mjs","/src/pages/sections/setting_up_the_environment.mdx":"chunks/pages/setting_up_the_environment_b303e549.mjs","/src/pages/sections/testing.mdx":"chunks/pages/testing_a13a10cb.mjs","/src/pages/sections/third-party_services.mdx":"chunks/pages/third-party_services_d85b3120.mjs","/src/pages/sections/troubleshooting_and_debugging.mdx":"chunks/pages/troubleshooting_and_debugging_1ec1f46a.mjs","\u0000@astrojs-manifest":"manifest_86914318.mjs","/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_7b57f67a.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_df24d34e.mjs","\u0000@astro-page:src/pages/sections/authentication_and_authorization@_@mdx":"chunks/authentication_and_authorization_9668f1aa.mjs","\u0000@astro-page:src/pages/sections/troubleshooting_and_debugging@_@mdx":"chunks/troubleshooting_and_debugging_4c9b4b73.mjs","\u0000@astro-page:src/pages/sections/setting_up_the_environment@_@mdx":"chunks/setting_up_the_environment_f67361e8.mjs","\u0000@astro-page:src/pages/sections/scaling_and_performance@_@mdx":"chunks/scaling_and_performance_60d68f1c.mjs","\u0000@astro-page:src/pages/sections/third-party_services@_@mdx":"chunks/third-party_services_d74e0223.mjs","\u0000@astro-page:src/pages/sections/directory_structure@_@mdx":"chunks/directory_structure_3e3c535d.mjs","\u0000@astro-page:src/pages/sections/acknowledgments@_@mdx":"chunks/acknowledgments_735a80fc.mjs","\u0000@astro-page:src/pages/sections/architecture@_@mdx":"chunks/architecture_f68de0fa.mjs","\u0000@astro-page:src/pages/sections/introduction@_@mdx":"chunks/introduction_864fe7b0.mjs","\u0000@astro-page:src/pages/sections/appendices@_@mdx":"chunks/appendices_d399e1ae.mjs","\u0000@astro-page:src/pages/sections/components/index@_@ts":"chunks/index_f7e13b06.mjs","\u0000@astro-page:src/pages/sections/conclusion@_@mdx":"chunks/conclusion_b2bb2acc.mjs","\u0000@astro-page:src/pages/sections/deployment@_@mdx":"chunks/deployment_fd3c00a7.mjs","\u0000@astro-page:src/pages/sections/references@_@mdx":"chunks/references_91ed216c.mjs","\u0000@astro-page:src/pages/sections/data_flow@_@mdx":"chunks/data_flow_75a3d565.mjs","\u0000@astro-page:src/pages/sections/abstract@_@mdx":"chunks/abstract_7fa14327.mjs","\u0000@astro-page:src/pages/sections/database@_@mdx":"chunks/database_cb77155a.mjs","\u0000@astro-page:src/pages/sections/frontend@_@mdx":"chunks/frontend_3e064043.mjs","\u0000@astro-page:src/pages/sections/backend@_@mdx":"chunks/backend_207a2002.mjs","\u0000@astro-page:src/pages/sections/testing@_@mdx":"chunks/testing_896aeb69.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_6d1e4bec.mjs","@astrojs/react/client.js":"_astro/client.401dfeec.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.7148c072.css","/favicon.svg","/_astro/client.401dfeec.js"]});

export { manifest };
