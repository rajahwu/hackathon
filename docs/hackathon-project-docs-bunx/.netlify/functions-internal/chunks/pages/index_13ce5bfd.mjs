/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, l as renderComponent, m as maybeRenderHead } from '../astro_3555f0b8.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './contents_f9ed1296.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "How [`@team15_project`] Works";
  const subtitle = "- An End to End Explanation";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="mx-auto, p-4, w-[800px], max-w-[calc(100% - 2rem)] leading-[1.6]"><div class="flex flex-col"><div class="flex flex-col h-screen justify-center items-center"><h1 class="text-4xl h-auto mb-1 text-center leading-4">${title}<div class="text-center"></div><span class="text-3xl">${subtitle}</span></h1><h2 class="pt-5 text-xl"><a href="/contents">contents</a></h2></div></div></main>` })}`;
}, "/home/rajahwu/appacademy/hackathon_project/hackathon/docs/hackathon-project-docs-bunx/src/pages/index.astro", void 0);

const $$file = "/home/rajahwu/appacademy/hackathon_project/hackathon/docs/hackathon-project-docs-bunx/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
