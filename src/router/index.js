import Vue from 'vue'
import Router from 'vue-router'
// import task_add from '@/components/task/task_add'
// import task from '@/components/task/task'

import login from '@/components/acount/login/login'
import register from '@/components/acount/register/register'
Vue.use(Router)

export default new Router ({
	routes: [
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/register',
			name: 'register',
			component: register
		}
	]
})