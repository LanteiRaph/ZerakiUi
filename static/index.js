//
//Compike the state of the application
export const state = () => ({
  idToken: "",
  user: Null
});

export const mutations = {
  authUser(state, userData) {
    state.idToken = userData.token;
  },
  clearAuth(state) {
    state.idToken = null;
    state.userId = null;
  }
};

export const actions = {
  signup({ commit }, authData) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(
        user => {
          console.log(user);
        },
        error => {
          alert(error);
        }
      );
  },
  login({ commit }, authData) {
    firebase
      .auth()
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(
        user => {
          console.log(user);
          localStorage.setItem("token", user.uid);
          commit("authUser", {
            token: user.uid
          });
          // router.push('/')
        },
        error => {
          alert(error);
        }
      );
  },
  logout({ commit }) {
    commit("clearAuth");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.replace("/");
  }
};
