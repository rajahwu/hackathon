import '@astrojs/internal-helpers/path';
/* empty css                           */import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, _ as __astro_tag_component__, F as Fragment, i as createVNode } from '../astro_3555f0b8.mjs';
import { i as isESMImportedImage, g as getImage$1 } from '../astro-assets-services_2519ad4d.mjs';
import 'html-escaper';
import 'clsx';
import { Title as SectionTitle } from './index_da9fb32c.mjs';

const $$Astro$1 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/node_modules/astro/components/Image.astro", void 0);

const $$Astro = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const additionalAttributes = {};
  if (fallbackImage.srcSet.values.length > 0) {
    additionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const frontmatter = {};
function getHeadings() {
  return [];
}
const MDXLayout = function Layout({
  children
}) {
  return createVNode("seciton", {
    className: "bg-amber-300",
    children: children
  });
};
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    strong: "strong"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(SectionTitle, {
      title: "Abstract"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "**Title**"
      }), ": How [Your Project Name] Works - An End-to-End Explanation"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "**Abstract**"
      }), ":\nThis abstract provides an overview of [Your Project Name], a [brief description of the project]. It addresses the [main problem or need it solves] and outlines the [approach/methodology] used to achieve the goal. The abstract highlights [key findings/results] and concludes by emphasizing the [impact/significance] of the project on [target audience/stakeholders]."]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/sections/abstract";
const file = "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/src/pages/sections/abstract.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/src/pages/sections/abstract.mdx";

const abstract = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, abstract as a, imageConfig as i };
