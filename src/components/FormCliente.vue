<template>
  <div class="Container">
    <h2>{{ msg }}</h2>
    <form action="/accion.js" id="form1" method="post">
      <label for="text1">Nombre</label><br />
      <input type="text" id="text1" name="text1" /><br /><br />

      <label for="correo1">Correo</label><br />
      <input type="email" id="correo1" name="correo1" /><br /><br />

      <label for="numero1">Celular</label><br />
      <input type="number" id="numero1" name="numero1" /><br /><br />

      <label for="tel1">Input de Teléfono</label><br />
      <input type="tel" id="tel1" name="tel1" maxlength="10" /><br /><br />
      <p><button type="submit">Submit</button></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormCliente",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.Container {
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.Container form {
  width: 40%;
  height: auto;
  margin: 0 auto;
}
</style>
