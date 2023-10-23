/* empty css                           */import { _ as __astro_tag_component__, F as Fragment, i as createVNode } from '../astro_3555f0b8.mjs';
import { $ as $$Image } from './abstract_758960da.mjs';
import 'html-escaper';
import 'clsx';
import '@astrojs/internal-helpers/path';
import 'react/jsx-runtime';
import '../astro-assets-services_2519ad4d.mjs';

const frontmatter = {};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "references",
    "text": "References"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components);
  return createVNode(_components.h1, {
    id: "references",
    children: "References"
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/sections/references";
const file = "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/src/pages/sections/references.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/src/pages/sections/references.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };