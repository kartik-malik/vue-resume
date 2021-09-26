<template>
  <header class="header">
              <i class="fas fa-user header__login" @click="$emit('toggleModal')"></i>
        <div class="text-box">
            <h1 class="heading-primary">
                <span class="heading-primary-main">
                 KARTIK MALIK
                </span>
                <span class="heading-primary-sub">Web developer</span>
            </h1>
            <a href="mailto:kartikmalikboss@gmail.com" class="btn btn-white btn-animated">Contact me</a>
        </div>
  </header>
</template>

<script>
export default {
emits:['toggleModal'],
methods:{

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header__login {
  position: absolute;
  right: 3%;
  top:5%;
  font-size: 5rem;
  color:white;
}
</style>