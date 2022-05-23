<template>
  <div class="flavorContainer">
    <h2>{{ msg }}</h2>
    <table class="center">
      <tr>
        <th>Añade adornos</th>
        <th>$</th>
        <th>Precio</th>
      </tr>
      <tr>
        <td> {{$store.getters.toppings[0].name}} </td>
        <td> {{$store.getters.toppings[0].price}} </td>
        <td>
          <input
            type="checkbox"
            id="topping1"
            name="topping1"
            value="Chokoretas"
          />
        </td>
      </tr>
      <tr>
        <td>{{$store.getters.toppings[1].name}}</td>
        <td> {{$store.getters.toppings[1].price}} </td>
        <td>
          <input
            type="checkbox"
            id="topping2"
            name="topping2"
            value="Durazno"
          />
        </td>
      </tr>
      <tr>
        <td>{{$store.getters.toppings[2].name}}</td>
        <td> {{$store.getters.toppings[2].price}} </td>
        <td>
          <input
            type="checkbox"
            id="topping3"
            name="topping3"
            value="Arándanos"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Toppings",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>