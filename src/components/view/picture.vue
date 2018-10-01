<template>
  <div>
    <a class="c-preview">
      <div class="c-preview__img"></div>
    </a>
    <img src="../../assets/loading.gif" alt="">
    <img src="../../assets/loading.gif" alt="">
    <img src="../../assets/loading.gif" alt="">
    <img src="../../assets/loading.gif" alt="">
    <img src="../../assets/loading.gif" alt="">
  </div>
</template>

<script>
    export default {
        name: "action2"
    }
</script>

<style scoped>
  .c-preview {
    background: -moz-linear-gradient(-45deg, #000000 0%, #000000 25%, #1e539e 50%, #ff3083 75%, #7800a8 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, #000000 0%, #000000 25%, #1e539e 50%, #ff3083 75%, #7800a8 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, #000000 0%, #000000 25%, #1e539e 50%, #ff3083 75%, #7800a8 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    background-size: 400% 400%;
    background-repeat: no-repeat;
    display: flex;
    width: 300px;
    height: 300px;
    max-width: 100vw;
    max-height: 100vh;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
    cursor: pointer;
    transition: .5s all;
    margin:20px auto;
  }
  .c-preview__img {
    position: absolute;
    left: 0;
    top: 0;
    /*background: #000 url(https://images.unsplash.com/photo-1466657718950-8f9346c04f8f?dpr=1&auto=format&fit=crop&w=800&h=800&q=80&cs=tinysrgb) no-repeat center center;*/
    background: url('../../assets/loading.gif') no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: .5;
    mix-blend-mode: screen;
  }
  .c-preview:hover {
    background-position: 100% 100%;
  }
</style>
