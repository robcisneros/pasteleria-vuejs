import { createStore } from "vuex";

export default createStore({
  state: {
    flavors: [
      { name: "Selva Negra", price: 79.99 },
      { name: "Tres leches limón", price: 87.99 },
      { name: "Zarzamora pay de queso", price: 107.99 },
    ],
    toppings: [
      { name: "Chokoretas", price: 22.49 },
      { name: "Durazno", price: 15.49 },
      { name: "Arándanos", price: 25.49 },
    ],
    selectedFlavors: [],
  },
  getters: {
    flavors(state){
      return state.flavors;
    },
    toppings(state){
      return state.toppings;
    }
  },
  mutations: {
    flavorsChange(state,flavors){
      state.selectedFlavors = flavors;
    }
  },
  actions: {
    flavorsChange({commit}, flavors) {
      commit("flavorsChange", flavors);
    }
  },
  modules: {},
});
