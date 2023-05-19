<template>
  <div class="position">
    <div class="grid mt-4 p-4 align-content-start p-d-flex p-mt-auto" style="background-color: #FFD400">
      <div class="col-12 ml-3 align-items-center justify-content-center texto" >
       <p>Copyright &copy; 2023 SneakerArt, inc All rights reserved.”</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-content"
}
</script>

<style>
.texto{
  text-align:center;
}
body {
  margin: 0;
  padding: 0;
}

.container {
  min-height: calc(100vh - 50px); /* Ajusta el valor de 50px según la altura del footer */
  margin-bottom: 50px; /* Igual a la altura del footer */
}

.position {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #FFD400; /* Color de fondo del footer */
}
</style>