/**
 * 包含应用中所有的路由模块
 */
import Home from '../pages/Home/Home'
import Category from '../pages/Category/Category'
import Personal from '../pages/Personal/Personal'
import Look from '../pages/Look/Look'
import ShopCart from '../pages/ShopCart/ShopCart'

export default [
  {
    path: '/home' ,
    component: Home,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/look',
    component: Look,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/shopCart',
    component: ShopCart,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    meta:{
      showFooter: false
    }
  },
  {
    path: '/',
    redirect: '/home',
    meta:{
      showFooter: true
    }
  }
]
