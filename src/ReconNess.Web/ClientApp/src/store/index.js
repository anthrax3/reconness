﻿import Vue from 'vue'
import Vuex from 'vuex'

import targets from './modules/targets'
import agents from './modules/agents'
import subdomains from './modules/subdomains'
import references from './modules/references'
import notes from './modules/notes'
import login from './modules/login'

Vue.use(Vuex)

export default new  Vuex.Store({
    modules: {
        targets,
        agents,
        subdomains,
        references,
        notes,
        login
    }    
})