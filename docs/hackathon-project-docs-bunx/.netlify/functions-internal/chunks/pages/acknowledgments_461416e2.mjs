/* empty css                           */import { _ as __astro_tag_component__, F as Fragment, i as createVNode } from '../astro_3555f0b8.mjs';
import { $ as $$Image, S as SectionTitle } from './abstract_be2beed9.mjs';
import 'html-escaper';
import 'clsx';
import '@astrojs/internal-helpers/path';
import 'react/jsx-runtime';
import '../astro-assets-services_2519ad4d.mjs';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./contents_f9ed1296.mjs').then(n => n.S)).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/Section.astro"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(SectionTitle, {
    title: "Acknowledgments"
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
const url = "/sections/acknowledgments";
const file = "/home/rajahwu/appacademy/hackathon_project/hackathon/docs/hackathon-project-docs-bunx/src/pages/sections/acknowledgments.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/rajahwu/appacademy/hackathon_project/hackathon/docs/hackathon-project-docs-bunx/src/pages/sections/acknowledgments.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
