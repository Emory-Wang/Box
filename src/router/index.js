import Vue from 'vue'
import Router from 'vue-router'
import Inputinfo from '../components/Inputinfo/Inputinfo.vue'
import Location from '../components/Inputinfo/Location.vue'
import Task from '../components/Inputinfo/Task.vue'
import Advicelocation from '../components/Inputinfo/Advicelocation.vue'
import Communication from '../components/Communication.vue'
import Inputmanage from '../components/Inputmanage.vue'
import Submitinfo from '../components/Inputinfo/Submitinfo.vue'

Vue.use(Router)

export default new Router({
	mode: 'history', // 去掉url中的# 
  routes: [

	  {
	    path: '/Inputinfo',
		name: 'Inputinfo',
	    component: Inputinfo,
		redirect: '/Location',
		children: [{path: '/Location', name: 'Location',component: Location},
		  {path: '/Task', name: 'Task',component: Task},
		  {path: '/Advicelocation', name: 'Advicelocation',component: Advicelocation},
		  {path: '/Submitinfo', name: 'Submitinfo',component: Submitinfo}
		  ]
	  },
	  {
	    path: '/Communication',
		name: 'Communication',
	    component: Communication
	  },
	  {
	    path: '/Inputmanage',
		name: 'Inputmanage',
	    component: Inputmanage
	  }
  ]
})
