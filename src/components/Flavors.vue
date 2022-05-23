<template>
  <div class="flavorContainer">
    <h2>{{ msg }}</h2>

    <table class="center">
      <tr>
        <th>Sabores</th>
        <th>$</th>
        <th>Precio</th>
      </tr>
      <tr>
        <td>{{ $store.getters.flavors[0].name }}</td>
        <td>{{ $store.getters.flavors[0].price }}</td>
        <td>
          <input
            type="checkbox"
            id="flavor1"
            name="flavor1"
            value="SelvaNegra"
            v-model="addedFlavors"
          />
        </td>
      </tr>
      <tr>
        <td>{{ $store.getters.flavors[1].name }}</td>
        <td>{{ $store.getters.flavors[1].price }}</td>
        <td>
          <input
            type="checkbox"
            id="flavor2"
            name="flavor2"
            value="TresLeches"
            v-model="addedFlavors"
          />
        </td>
      </tr>
      <tr>
        <td>{{ $store.getters.flavors[2].name }}</td>
        <td>{{ $store.getters.flavors[2].price }}</td>
        <td>
          <input
            type="checkbox"
            id="flavor3"
            name="flavor3"
            value="Zarzamora"
            v-model="addedFlavors"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addedFlavors: [],
    };
  },
  name: "Flavors",
  props: {
    msg: String,
  },
};
</script>

<style>
.flavorContainer {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
