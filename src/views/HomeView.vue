<template>
  <div class="views">
    <MainLogo />
    <Flavors msg="Personaliza tu pedido: "  />
    <Toppings msg="Añade adornos: " />
    
  </div>
</template>

<script>
// @ is an alias to /src
import MainLogo from '@/components/MainLogo.vue'
import Flavors from '@/components/Flavors.vue'
import Toppings from '@/components/Toppings.vue'

export default {
  name: 'HomeView',
  components: {
    MainLogo,
    Flavors,
    Toppings,
  }
}
</script>

<style>
.views{
  width: 100%;
  min-height: 500px;
  height: auto;
}
</style>