//Import the firebase plugin
import firebase from '@/plugins/Firebase.js'

export const state = () => ({
  idToken: '',
  user: null,
  authData: null
})

// Decalere the mutations.
export const mutations = {
  authUser (state, userData) {
    state.idToken = userData.token
  },
  clearAuth (state) {
    state.idToken = null
    state.userId = null
  }
}

// Decalre the actions to mutate the state.
export const actions = {

  signup ({ commit , state}, authData) {
    console.log(state.authData)
    firebase.auth().createUserWithEmailAndPassword(state.authData.email, state.authData.password).then(
      user => {
        console.log(user)
        localStorage.setItem('token', user.uid)
        commit('authUser', {
          token: user.uid
        })
      },
      error => {
        alert(error)
      }
    )
  },
  login ({ commit ,state}, authData) {
    firebase.auth().signInWithEmailAndPassword(state.authData.email, state.authData.password).then(
      user => {
        console.log(user)
        localStorage.setItem('token', user.uid)
        commit('authUser', {
          token: user.uid
        })
        // router.push('/')
      },
      error => {
        alert(error)
      }
    )
  },
  logout ({ commit }) {
    commit('clearAuth')
    localStorage.removeItem('userId')
    router.replace('/')
  }
}

// Decalre the getters, easy access to the state.
export const getters = {
  user (state) {
    return state.user
  },
  ifAuthenticated (state) {
    return state.idToken !== null
  }
}
