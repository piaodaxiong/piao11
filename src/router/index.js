import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Shouye from '@/components/luyou/Shouye'
import Xiaoliang from '@/components/luyou/Xiaoliang'
import Pinpaiguan from '@/components/luyou/Pinpaiguan'
import Jiankangbaike from '@/components/luyou/Jiankangbaike'

Vue.use(Router)

export default new Router({
  routes: [
    // {
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld,
      // redirect:'/Luyou1'
    // },
    {
      path: '/',
      name: 'Shouye',
      component: Shouye
    },
    {
      path: '/Xiaoliang',
      name: 'Xiaoliang',
      component: Xiaoliang
    },
    {
      path: '/Pinpaiguan',
      name: 'Pinpaiguan',
      component: Pinpaiguan
    },
    {
      path: '/Jiankangbaike',
      name: 'Jiankangbaike',
      component: Jiankangbaike
    }
  ]
})
