import { e as createAstro, f as createComponent, r as renderTemplate, l as renderComponent, m as maybeRenderHead, k as renderSlot } from './astro_3555f0b8.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './pages/index_5cdfc797.mjs';
/* empty css                             *//* empty css                          *//* empty css                             *//* empty css                          */
const $$Astro = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "", "data-astro-cid-w3xduq4o": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="text-white leading-4" data-astro-cid-w3xduq4o>${renderSlot($$result2, $$slots["default"])}</div>` })}`;
}, "/home/rajahwu/appacademy/hackathon_project/hackathon/docs/hackathon-project-docs-bunx/src/layouts/Section.astro", void 0);

export { $$Section as default };
