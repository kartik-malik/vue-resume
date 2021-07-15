<template>
    <div ref="imageGrid" class="imageGrid" :class="{}" v-observe-visibility="{
        callback:isVisibleNow,
        intersection:{
            thresold:0.5,
        },
        once:true
    }">
        <h1 class="img-grid__heading ">
            Skills
        </h1>
        <div class="img-grid">
      <img src="../assets/html.jpg" alt="" class="img-grid__img img-grid__img--html">
      <img src="../assets/download.jpg" alt="" class="img-grid__img">
            <img src="../assets/node.jpg" alt="" class="img-grid__img img-grid__img--node">
            <img src="../assets/react.jpg" alt="" class="img-grid__img">
        <img src="../assets/vue.jpg" alt="" class="img-grid__img">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
          isVisible:false
        }
    },methods:{
         isVisibleNow(isVisible){
              this.isVisible=isVisible;
              if(this.isVisible)
               {
                   this.$refs.imageGrid.style.opacity=1;
                   this.$refs.imageGrid.style.transform="translateY(0)";
               }      
         }
    }

}
</script>
<style lang="scss" scoped>
.imageGrid{
    opacity: 0;
    transform:translateY(20rem);
    transition: all 0.8s;
}
$color-primary:#373B44;
$color-primary-dark:#4286f4;

   .img-grid{
       display: grid;
      grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
      
       gap: 5rem 10rem;
       align-items: center;
       justify-items: center;
       padding: 4rem;
       &__img{
           width: 50%;
           
                  transition: all 0.4s;

           &--html{
               width: 50%;
               border-radius: 0;
               justify-self: center;
               grid-column: 1/-1;
               height: 20rem;
           }
            
           &:hover{
           transform: scale(1.4);
         
       }
       }
    &__heading{
        color: $color-primary-dark;
        margin-bottom: 2rem;
         transition: all 0.3s;
        // animation: bounce 2s;
        text-align: center;
        &:hover{
            transform: skewY(7deg) scale(1.2);
        }
    }   
   }

</style>