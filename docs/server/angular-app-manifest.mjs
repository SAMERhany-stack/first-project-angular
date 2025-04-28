
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/first-project-angular/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 6074, hash: 'c1df9df62845b9e0ecd1a5c429d8621b2af31b600b82efbca4a719660ed766e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1222, hash: '3d93b91b9a7e70949ae0ad7247677bd12e4526be4822803307849eb88fb0ba86', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-J7BN47AV.css': {size: 305312, hash: '1pwIKQx7/Nk', text: () => import('./assets-chunks/styles-J7BN47AV_css.mjs').then(m => m.default)}
  },
};
