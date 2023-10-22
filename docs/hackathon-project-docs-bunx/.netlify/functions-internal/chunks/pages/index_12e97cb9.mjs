/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, j as renderHead, k as renderSlot, l as renderComponent, m as maybeRenderHead } from '../astro_3555f0b8.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                           */
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "How [`app_academy_hackathon\n${date}@team15_project`] Works";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="mx-auto, p-4, w-[800px], max-w-[calc(100% - 2rem)] text-slate-200 leading-[1.6]" data-astro-cid-j7pv25f6><div class="flex flex-col" data-astro-cid-j7pv25f6><h1 class="text-4xl h-auto mb-1 text-center leading-4 text-slate-100" data-astro-cid-j7pv25f6>${title}<span class="text-3xl" data-astro-cid-j7pv25f6>- An End to End Explanation</span></h1></div><div class="flex h-screen justify-center items-center" data-astro-cid-j7pv25f6><div class="text-center" data-astro-cid-j7pv25f6><h2 data-astro-cid-j7pv25f6>Contents</h2><ol id="sections" data-astro-cid-j7pv25f6><li data-astro-cid-j7pv25f6><a href="/sections/abstract" data-astro-cid-j7pv25f6>Abstract</a></li><li data-astro-cid-j7pv25f6><a href="/sections/introduction" data-astro-cid-j7pv25f6>Introduction</a></li><li data-astro-cid-j7pv25f6><a href="/sections/architecture" data-astro-cid-j7pv25f6>Architecture</a></li><li data-astro-cid-j7pv25f6><a href="/sections/setting_sp_the_environment" data-astro-cid-j7pv25f6>Setting Up the Environment</a></li><li data-astro-cid-j7pv25f6><a href="/sections/directory_structure" data-astro-cid-j7pv25f6>Directory Structure</a></li><li data-astro-cid-j7pv25f6><a href="/sections/data_flow" data-astro-cid-j7pv25f6>Data Flow</a></li><li data-astro-cid-j7pv25f6><a href="/sections/backend" data-astro-cid-j7pv25f6>Backend</a></li><li data-astro-cid-j7pv25f6><a href="/sections/frontend" data-astro-cid-j7pv25f6>Frontend</a></li><li data-astro-cid-j7pv25f6><a href="/sections/database" data-astro-cid-j7pv25f6>Database</a></li><li data-astro-cid-j7pv25f6><a href="/sections/authentication_and_authorization" data-astro-cid-j7pv25f6>Authentication and Authorization</a></li><li data-astro-cid-j7pv25f6><a href="/sections/third-party_services" data-astro-cid-j7pv25f6>Third-Party Services</a></li><li data-astro-cid-j7pv25f6><a href="/sections/testing" data-astro-cid-j7pv25f6>Testing</a></li><li data-astro-cid-j7pv25f6><a href="/sections/deployment" data-astro-cid-j7pv25f6>Deployment</a></li><li data-astro-cid-j7pv25f6><a href="/sections/scaling_and_performance" data-astro-cid-j7pv25f6>Scaling and Performance</a></li><li data-astro-cid-j7pv25f6><a href="/sections/troubleshooting_and_debugging" data-astro-cid-j7pv25f6>Troubleshooting and Debugging</a></li><li data-astro-cid-j7pv25f6><a href="/sections/conclusion" data-astro-cid-j7pv25f6>Conclusion</a></li><li data-astro-cid-j7pv25f6><a href="/sections/references" data-astro-cid-j7pv25f6>References</a></li><li data-astro-cid-j7pv25f6><a href="/sections/appendices" data-astro-cid-j7pv25f6>Appendices</a></li><li data-astro-cid-j7pv25f6><a href="/sections/acknowledgments" data-astro-cid-j7pv25f6>Acknowledgments</a></li></ol></div></div></main>` })}`;
}, "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/src/pages/index.astro", void 0);

const $$file = "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
