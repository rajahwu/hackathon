import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_dffa2965.mjs';
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
  const title = "How [`app_academy_hackathon\n${date}@team15_project`] Works - An End to End Explation";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-j7pv25f6><h1 data-astro-cid-j7pv25f6>${title}</h1></main>` })}`;
}, "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/src/pages/index.astro", void 0);

const $$file = "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
