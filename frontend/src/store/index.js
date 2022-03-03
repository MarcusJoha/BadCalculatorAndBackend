import { createStore } from "vuex";
// import axios from "axios";

export default createStore({
  state: {
    name: "",
    email: "",

    feedbacks: [], // list
    feedback: {}, // object
    user: null,
    validUser: false,
    users: [{ name: "marcus", email: "marcus-j@online.no", password: "qwerty" },
    { name: "YOO", email: "yo@mail.com", password: "123456" }] // hardcoded user

  },
  mutations: {
    ADD_FEEDBACK(state, feedback) {
      state.feedbacks.push({
        name: "Marcus",
        email: "marcus-j@online.no",
        message: "hallo",
      });
      state.feedbacks.push(feedback);
    },
    SET_USER_DATA(state, userData) {
      console.log("User data:", userData);
      // /*
      // state.user = userData;
      console.log("Fra store: ", userData);
      state.users.push(userData);

      // localStorage.setItem('user', JSON.stringify(userData))
      // axios.defaults.headers.common['Authorization'] = `Bearer ${ userData.token }`;
      // */
    },

    LOG_IN_USER(state, user) {
      console.log("Login user store", user);
    },

    SET_NAME(state, name) {
        state.name = name;
        console.log("name fra store", state.name);
    },

    SET_EMAIL(state, email) {
      state.email = email;
    }
  },

  actions: {
    addFeedback({ commit }, feedback) {
      commit("ADD_FEEDBACK", feedback)
    },

    register({ commit }, credentials) {
      
      commit("SET_USER_DATA", credentials);

      /*
      return axios
        .post("//localhost:3000/user", credentials)
        .then(({ data }) => {
        // console.log('user data is', data)
          commit("SET_USER_DATA", data);
        })
        .catch((error) => {
          console.log(error);
      })
      */
    },

    login({ commit }, user) {
      console.log("Inne i store", user)
      commit("LOG_IN_USER", user);
    }
  },
  modules: {},
});
