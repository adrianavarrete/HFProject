import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import map from './modules/map'
import droneList from './modules/droneList'
import VuexPersist from 'vuex-persist'


Vue.use(Vuex)
const vuexPersist = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  modules: {
    user,
    map,
    droneList
  },
  plugins: [vuexPersist.plugin]
})
