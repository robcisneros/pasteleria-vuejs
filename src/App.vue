<template>
  <div class="wrapper">
    <div class="wrapper2">
      <nav class="navi">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/pedidos">Pedidos</router-link>
        <router-view />
      </nav>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrapper2 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  margin: 10px 5px 0px 5px;
  width: 80%;
  display: flex;
  justify-content: center;
  border: 3px solid azure;
  padding: 10px;
  background-color: #ffe5d9;
}
nav {
  display: flex;
  height: auto;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: flex-end;
}

nav a {
  font-weight: bold;
  font-size: 15px;
  color: #2c3e50;
  margin: 0px 10px 0px 10px;
}

nav a.router-link-exact-active {
  color: black;
  background-color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
