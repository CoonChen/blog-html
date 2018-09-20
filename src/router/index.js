import Vue from 'vue'
import Router from 'vue-router'
const login  = r => require.ensure([], () => r(require('../components/login.vue')));
const home  = r => require.ensure([], () => r(require('../components/home.vue')));
const index  = r => require.ensure([], () => r(require('../components/index.vue')));
const notFind  = r => require.ensure([], () => r(require('../components/404.vue')));

//view
const edit  = r => require.ensure([], () => r(require('../components/view/edit.vue')));
const echart  = r => require.ensure([], () => r(require('../components/view/echart.vue')));
const setting  = r => require.ensure([], () => r(require('../components/view/setting.vue')));
const about  = r => require.ensure([], () => r(require('../components/view/about.vue')));
const notes  = r => require.ensure([], () => r(require('../components/view/notes.vue')));
const picture  = r => require.ensure([], () => r(require('../components/view/picture.vue')));

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {path: '/index',component: index,name: 'index', meta: {label: '首页'}},
        {path: '/edit',component: edit,name: 'edit', meta: {label: '记忆执笔'}},
        {path: '/notes',component: notes,name: 'notes', meta: {label: '灵犀一刻'}},
        {path: '/echart',component: echart,name: 'echart', meta: {label: '图表之美'}},
        {path: '/picture',component: picture,name: 'picture', meta: {label: '画林之艺'}},
        {path: '/about',component: about,name: 'about', meta: {label: '关于系统'}},
        {path: '/setting',component: setting,name: 'setting', meta: {label: '工匠之技'}}
      ]
    },
    {path: '/login',component: login,name: 'login', meta: {label: '登录'}},
    {path: '/404',component: notFind, name: '404', meta: {label: '404'}}

  ]
})
