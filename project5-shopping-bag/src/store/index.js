import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cartProducts: [],
  },
  mutations: {
    loadProducts(state, response) {
      state.products = { ...response };
      console.log(state.products);
    },
    addToCart(state, item) {
      state.cartProducts.push(item);
      console.log(state.cartProducts);
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit("loadProducts", response.data);
      });
    },
    addToCart({ commit }, item) {
      commit("addToCart", item);
    },
  },
  modules: {},
});
