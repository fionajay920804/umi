import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'cart', ...(require('/Users/hechen/Documents/react-project/umi-antd-project/umi-test/umi-ant-pro/src/models/cart.js').default) });
app.model({ namespace: 'user', ...(require('/Users/hechen/Documents/react-project/umi-antd-project/umi-test/umi-ant-pro/src/models/user.js').default) });
app.model({ namespace: 'goods', ...(require('/Users/hechen/Documents/react-project/umi-antd-project/umi-test/umi-ant-pro/src/pages/goods/models/goods.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
