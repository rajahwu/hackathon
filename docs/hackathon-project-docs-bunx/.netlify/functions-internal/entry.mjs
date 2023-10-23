import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_658045e7.mjs';
import 'react';
import 'react-dom/server';
import './chunks/astro_3555f0b8.mjs';
import 'html-escaper';
import 'clsx';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_5b8648fe.mjs');
const _page1  = () => import('./chunks/index_71c78045.mjs');
const _page2  = () => import('./chunks/contents_ae3cd6eb.mjs');
const _page3  = () => import('./chunks/authentication_and_authorization_3edc8a2c.mjs');
const _page4  = () => import('./chunks/troubleshooting_and_debugging_ef70de65.mjs');
const _page5  = () => import('./chunks/setting_up_the_environment_e733e7d2.mjs');
const _page6  = () => import('./chunks/scaling_and_performance_c966a744.mjs');
const _page7  = () => import('./chunks/third-party_services_0aa86b7a.mjs');
const _page8  = () => import('./chunks/directory_structure_14ecfca5.mjs');
const _page9  = () => import('./chunks/acknowledgments_6bae1a35.mjs');
const _page10  = () => import('./chunks/architecture_e8b65911.mjs');
const _page11  = () => import('./chunks/introduction_cde9e1dc.mjs');
const _page12  = () => import('./chunks/appendices_7968eaee.mjs');
const _page13  = () => import('./chunks/conclusion_8cd44680.mjs');
const _page14  = () => import('./chunks/deployment_191c9905.mjs');
const _page15  = () => import('./chunks/references_6a5a240e.mjs');
const _page16  = () => import('./chunks/data_flow_a7fbe37b.mjs');
const _page17  = () => import('./chunks/abstract_b3d5ff2b.mjs');
const _page18  = () => import('./chunks/database_0e62f0b2.mjs');
const _page19  = () => import('./chunks/frontend_70c61a4c.mjs');
const _page20  = () => import('./chunks/backend_e1712176.mjs');
const _page21  = () => import('./chunks/testing_58349612.mjs');
const _page22  = () => import('./chunks/about_f20619ac.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/contents.astro", _page2],["src/pages/sections/authentication_and_authorization.mdx", _page3],["src/pages/sections/troubleshooting_and_debugging.mdx", _page4],["src/pages/sections/setting_up_the_environment.mdx", _page5],["src/pages/sections/scaling_and_performance.mdx", _page6],["src/pages/sections/third-party_services.mdx", _page7],["src/pages/sections/directory_structure.mdx", _page8],["src/pages/sections/acknowledgments.mdx", _page9],["src/pages/sections/architecture.mdx", _page10],["src/pages/sections/introduction.mdx", _page11],["src/pages/sections/appendices.mdx", _page12],["src/pages/sections/conclusion.mdx", _page13],["src/pages/sections/deployment.mdx", _page14],["src/pages/sections/references.mdx", _page15],["src/pages/sections/data_flow.mdx", _page16],["src/pages/sections/abstract.mdx", _page17],["src/pages/sections/database.mdx", _page18],["src/pages/sections/frontend.mdx", _page19],["src/pages/sections/backend.mdx", _page20],["src/pages/sections/testing.mdx", _page21],["src/pages/about.astro", _page22]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
