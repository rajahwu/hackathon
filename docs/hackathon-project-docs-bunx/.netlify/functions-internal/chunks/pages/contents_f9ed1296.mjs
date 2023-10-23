/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, j as renderHead, k as renderSlot, l as renderComponent, m as maybeRenderHead } from '../astro_3555f0b8.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/rajahwu/appacademy/hackathon_project/hackathon/docs/hackathon-project-docs-bunx/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="prose prose-neutral border flex flex-col mx-auto px-16 pt-5 pb-16 prose-h1:text-center rounded mt-5"><div class="navbar text-neutral-content flex text-slate-600 justify-between"><a id="prev-section-link" class="btn btn-ghost">prev</a><a id="contents-section-link" class="btn btn-ghost" href="/contents">contents</a><a id="next-section-link" class="btn btn-ghost">next</a></div>${renderSlot($$result2, $$slots["default"])}</div>` })}`;
}, "/home/rajahwu/appacademy/hackathon_project/hackathon/docs/hackathon-project-docs-bunx/src/layouts/Section.astro", void 0);

const Section = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Section
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Contents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contents;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<ol id="sections"><li><a href="/sections/abstract">Abstract</a></li><li><a href="/sections/introduction">Introduction</a></li><li><a href="/sections/architecture">Architecture</a></li><li><a href="/sections/setting_up_the_environment">Setting Up the Environment</a></li><li><a href="/sections/directory_structure">Directory Structure</a></li><li><a href="/sections/data_flow">Data Flow</a></li><li><a href="/sections/backend">Backend</a></li><li><a href="/sections/frontend">Frontend</a></li><li><a href="/sections/database">Database</a></li><li><a href="/sections/authentication_and_authorization">Authentication and Authorization</a></li><li><a href="/sections/third-party_services">Third-Party Services</a></li><li><a href="/sections/testing">Testing</a></li><li><a href="/sections/deployment">Deployment</a></li><li><a href="/sections/scaling_and_performance">Scaling and Performance</a></li><li><a href="/sections/troubleshooting_and_debugging">Troubleshooting and Debugging</a></li><li><a href="/sections/conclusion">Conclusion</a></li><li><a href="/sections/references">References</a></li><li><a href="/sections/appendices">Appendices</a></li><li><a href="/sections/acknowledgments">Acknowledgments</a></li></ol>` })}`;
}, "/home/rajahwu/appacademy/hackathon_project/hackathon/docs/hackathon-project-docs-bunx/src/pages/contents.astro", void 0);

const $$file = "/home/rajahwu/appacademy/hackathon_project/hackathon/docs/hackathon-project-docs-bunx/src/pages/contents.astro";
const $$url = "/contents";

const contents = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contents,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Section as S, contents as c };
