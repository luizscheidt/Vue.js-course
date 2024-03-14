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
    loadCart(state, products) {
      state.cartProducts = products;
    },
    addToCart(state, item) {
      state.cartProducts.push(item);
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    removeFromCart(state, itemID) {
      let updatedBag = state.cartProducts.filter(
        (product) => product.id !== itemID
      );
      state.cartProducts = updatedBag;
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit("loadProducts", response.data);
      });
    },
    loadCart({ commit }) {
      if (localStorage.getItem("cartProducts")) {
        commit("loadCart", JSON.parse(localStorage.getItem("cartProducts")));
      }
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
