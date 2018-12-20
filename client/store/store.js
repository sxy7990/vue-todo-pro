import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

// 用服务端渲染时每次都要新生产store，如果用同一个会导致内存溢出
export default () => {
  const store = new Vuex.Store({
    // 严格模式，不让外部修改state里的值
    // 修改东西尽量放到mutation里面
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    // vuex插件
    // plugins: [
    //   (store) => {
    //     console.log('my plugin invoked')
    //   }
    // ],
    modules: {
      a: {
        // a里面的mutation不放到全局，不同模块可以写不同名字的
        namespaced: true,
        state: {
          text: 'module1'
        },
        mutations: {
          updateText (state, text) {
            console.log('a.state', state)
            state.text = text
          }
        },
        getters: {
          // 模块内获取全局state
          textPlus (state, getters, rootState) {
            return state.text + rootState.b.text
          }
        },
        actions: {
          add ({state, commit, rootState}) {
            commit('updateCount', { num: 5678 }, { root: true })
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 'module2'
        },
        actions: {
          testAction ({commit}) {
            commit('a/updateText', 'test text', { root: true })
          }
        }
      }
    }
  })

  // store热更新功能
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }

  return store
}
