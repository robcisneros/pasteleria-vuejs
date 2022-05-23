<template>
  <div class="views">
    <FormCliente msg="Datos del cliente" />
  </div>
</template>

<script>
import FormCliente from '@/components/FormCliente.vue'

export default {
  name: "PedidosView",
  components: {
    FormCliente,
  },
};
</script>

<style scoped>
</style>
