/* empty css                           */import { _ as __astro_tag_component__, F as Fragment, i as createVNode } from '../astro_3555f0b8.mjs';
import { $ as $$Image } from './abstract_18148c08.mjs';
import 'html-escaper';
import 'clsx';
import '@astrojs/internal-helpers/path';
import '../astro-assets-services_2519ad4d.mjs';

const frontmatter = {};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "directory-structure",
    "text": "Directory Structure"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components);
  return createVNode(_components.h1, {
    id: "directory-structure",
    children: "Directory Structure"
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
const url = "/sections/directory_structure";
const file = "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/src/pages/sections/directory_structure.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/rajahwu/appacademy/hackathon/docs/hackathon-project-docs-bunx/src/pages/sections/directory_structure.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
