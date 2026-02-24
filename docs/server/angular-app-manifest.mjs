
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Frc/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Frc"
  },
  {
    "renderMode": 2,
    "route": "/Frc/formulapage"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Frc",
    "route": "/Frc/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7288, hash: 'df886e3cd4fc29f00ccd362fecf60c941cb4fb96f1fcb22c20b3989cb1fd3fe4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 948, hash: '151a147303f48d67ffed4c9b22042513e7bc07f3cd9adb4f9215c067a3768e1e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'formulapage/index.html': {size: 237, hash: '3bd7963ae57035f4e9872979c96effcad2a55539ba79c1669e752ffd6b4554f5', text: () => import('./assets-chunks/formulapage_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10362, hash: '2903453b16e7bd58b93f9cf4911ca711851cff5b92babf7b208d74b18b33459c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZEFC43JQ.css': {size: 21290, hash: 'myRRve9Towg', text: () => import('./assets-chunks/styles-ZEFC43JQ_css.mjs').then(m => m.default)}
  },
};
