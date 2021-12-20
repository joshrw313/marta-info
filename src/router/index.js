import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Stations from '../views/Stations.vue';
import Routes from '../views/Routes.vue';
import BusRoute from '../views/BusRoute.vue';
import BusDetails from '../views/BusDetails.vue';
import RailStation from '../views/RailStation.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vehicles/:vehicle',
    name: 'BusDetails',
    component: BusDetails
  },
  {
    path: '/routes',
    name: 'Routes',
    component: Routes
  },
  {
    path: '/routes/:route',
    name: 'BusRoute',
    component: BusRoute
  },
  {
    path: '/stations/:station',
    name: 'RailStation',
    component: RailStation
  },
  {
    path: '/stations',
    name: 'Stations',
    component: Stations
  },
]

const router = new VueRouter({
  routes
})

export default router
