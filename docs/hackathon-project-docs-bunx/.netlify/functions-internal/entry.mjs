import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_2ca2752d.mjs';
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

const _page0  = () => import('./chunks/generic_3d0968a8.mjs');
const _page1  = () => import('./chunks/index_cdb52457.mjs');
const _page2  = () => import('./chunks/authentication_and_authorization_fcd0c345.mjs');
const _page3  = () => import('./chunks/troubleshooting_and_debugging_3f746183.mjs');
const _page4  = () => import('./chunks/setting_up_the_environment_7f02d4f9.mjs');
const _page5  = () => import('./chunks/scaling_and_performance_d83d7804.mjs');
const _page6  = () => import('./chunks/third-party_services_3e992eab.mjs');
const _page7  = () => import('./chunks/directory_structure_b06eabb7.mjs');
const _page8  = () => import('./chunks/acknowledgments_0562e8bc.mjs');
const _page9  = () => import('./chunks/architecture_6099079c.mjs');
const _page10  = () => import('./chunks/introduction_b4659a48.mjs');
const _page11  = () => import('./chunks/appendices_428121f9.mjs');
const _page12  = () => import('./chunks/conclusion_950844cd.mjs');
const _page13  = () => import('./chunks/deployment_3bb2aaa1.mjs');
const _page14  = () => import('./chunks/references_0af55443.mjs');
const _page15  = () => import('./chunks/data_flow_7810350d.mjs');
const _page16  = () => import('./chunks/abstract_504eed45.mjs');
const _page17  = () => import('./chunks/database_4a773dd1.mjs');
const _page18  = () => import('./chunks/frontend_fdec747b.mjs');
const _page19  = () => import('./chunks/backend_1ec36dea.mjs');
const _page20  = () => import('./chunks/testing_22ea9688.mjs');
const _page21  = () => import('./chunks/about_da024bc7.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/sections/authentication_and_authorization.mdx", _page2],["src/pages/sections/troubleshooting_and_debugging.mdx", _page3],["src/pages/sections/setting_up_the_environment.mdx", _page4],["src/pages/sections/scaling_and_performance.mdx", _page5],["src/pages/sections/third-party_services.mdx", _page6],["src/pages/sections/directory_structure.mdx", _page7],["src/pages/sections/acknowledgments.mdx", _page8],["src/pages/sections/architecture.mdx", _page9],["src/pages/sections/introduction.mdx", _page10],["src/pages/sections/appendices.mdx", _page11],["src/pages/sections/conclusion.mdx", _page12],["src/pages/sections/deployment.mdx", _page13],["src/pages/sections/references.mdx", _page14],["src/pages/sections/data_flow.mdx", _page15],["src/pages/sections/abstract.mdx", _page16],["src/pages/sections/database.mdx", _page17],["src/pages/sections/frontend.mdx", _page18],["src/pages/sections/backend.mdx", _page19],["src/pages/sections/testing.mdx", _page20],["src/pages/about.astro", _page21]]);
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
