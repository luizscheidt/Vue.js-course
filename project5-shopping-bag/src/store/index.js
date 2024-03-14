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
    },
    addToCart(state, item) {
      state.cartProducts.push(item);
    },
    removeFromCart(state, itemID) {
      let updatedBag = state.cartProducts.filter(
        (product) => product.id !== itemID
      );
      state.cartProducts = updatedBag;
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
    removeFromCart({ commit }, itemID) {
      if (confirm("Are you sure you want to remove this item from the cart?")) {
        commit("removeFromCart", itemID);
      }
    },
  },
  modules: {},
});
