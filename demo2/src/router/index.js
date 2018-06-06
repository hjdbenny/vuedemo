import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Index from '@/pages/index'
import Relation from '@/pages/relation'
import Reply from '@/pages/reply'
import Menu from '@/pages/menu'
import Fans from '@/pages/fans'
import Module from '@/pages/module'
import Kf from '@/pages/kf'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Login',
		component: Login
	}, {
		path: '/index',
		//		name: 'index',
		component: Index,
		children: [{
			path: '/',
			name: 'Relation',
			component: Relation
		}, {
			path: 'reply',
			name: 'Reply',
			component: Reply
		}, {
			path: 'menu',
			name: 'Menu',
			component: Menu
		}, {
			path: 'fans',
			name: 'Fans',
			component: Fans
		}, {
			path: 'module',
			name: 'Module',
			component: Module
		}, {
			path: 'kf',
			name: 'Kf',
			component: Kf
		}]
	}]
})