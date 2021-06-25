<template>
    <div class="item"> 
        <img :src="require(`../assets/${sr}`)" alt="" class="item__img">
        <h2 class="item__name">{{name}}</h2>
    </div>
</template>

<script>
export default {
    props:['source',"name"],
    data(){
        return{
            sr:this.source
        }
    },
    computed:{
      getImgUrl(pic) {
    return require('../assets/'+pic)
}
    }
}
</script>


<style lang="scss" scoped>
.item {
    box-shadow: 0 2rem 4rem rgba($color: #000000, $alpha: 0.4);
    display: grid;
grid-template-columns: repeat(2,1fr);    &__name{
        grid-row: 1/2;
        align-self: end;
        position: relative;
        transform: translateY(50%);
        z-index: 3;
        grid-column: 1/-1;
        
        font-size: 1.6rem;
        padding: 1.25rem;
        text-align: center;
        width: 80%;
        justify-self: center;
        background-color: black;
        color: #fff;
        font-weight: 400;
    }
    &__img{
        width: 100%;
        height: 100%;
        grid-column: 1/-1;
        grid-row: 1/2;
    }
}

</style>