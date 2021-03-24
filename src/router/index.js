import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/member/login'
import forgot from '../views/member/forgot'
import perfectInfo from '../views/member/perfectInfo'
import userLayout from '../components/layout/UserLayout'
import home from '../views/home/home'

import Project from '../views/project/project'
import ProList from '../views/project/list'

import System from '../views/system/system'
import Setting from '../views/system/setting'
import Log from '../views/system/log'
import User from '../views/system/user'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/user/login'
    },
    {
      path: '/user',
      name: 'userLayout',
      component: userLayout,
      meta: {model: 'Login'},
      children:[
        {
          path: 'login',
          name: 'login',
          component: login,
          meta: {model: '登陆'},
        },
        {
          path: 'forgot',
          name: 'forgot',
          component: forgot,
          meta: {model: '忘记密码'},
        },
        {
          path: 'perfectInfo',
          name: 'perfectInfo',
          component: perfectInfo,
          meta: {model: '完善信息'},
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {model: '主页'},
      children: [
        {
          path: '',
          redirect: 'project'
        },
        {
          path: 'project',
          name: 'project',
          component: Project,
          meta: {model: '项目管理'},
          children: [
            {
              path: '',
              redirect: 'list'
            },
            {
              path: 'list',
              name: 'list',
              component: ProList,
              meta: {model: '项目列表'}
            }
          ]
        },
        {
          path: 'system',
          name: 'system',
          component: System,
          meta: {model: '系统管理'},
          children: [
            {
              path: 'setting',
              name: 'setting',
              component: Setting,
              meta: {model: '系统设置'},
            },
            {
              path: 'logger',
              name: 'logger',
              component: Log,
              meta: {model: '日志管理'},
            },
            {
              path: 'user',
              name: 'user',
              component: User,
              meta: {model: '用户管理'},
            }
          ]
        }
      ]
    }
  ]
})
