<template>
  <div class="detail__contain">
          <h3 class="detail_heading-2"
          @click="openLink"
    :class="{ 'visible animate__animated animate__slideInRight': isVisible, 'invisible': !isVisible }"

     v-observe-visibility="{callback:isVisibleNow,intersection:{
            threshold: 1,
       },once:true}"
          > {{name}}</h3>
       <div class="detail__p">
           {{desc}}
        </div>
</div>   

        <img class="detail__image" :src="require(`../assets/${source}`)" alt="" @click="openLink">
             

</template>

<script>

export default {
     data(){
         return {
             isVisible:false,
         }
     },
     computed:{
       classObject(){
            return {'animate__animated':this.isVisible,'animated__slideInRight':this.isVisible,animate:this.isVisible}
       }
     },
     props:['source',"name","href","desc"],
 methods:{
     isVisibleNow(isVisible){
         this.isVisible=isVisible;
         console.log('hi');
        },
         openLink(){
            window.open(this.href, '_blank');
        }
    }
}
</script>

<style scoped lang="scss">
// .delete__contain{
//     width: 80%;
// }
h3 {
    display: inline-block;
    background: linear-gradient(45deg, rgba(0,34,36,1) 0%, rgba(9,115,121,1) 0%, rgba(0,31,255,1) 100%);
    background-clip: text;
    color: transparent;
    font-size: 4rem;
    position: relative;
    &::after{
      content:"";
      display: block;
      border-bottom:5px solid blue;
      width:60%;
      position: absolute;
      left: 50%;
      bottom:0.5rem;
    transform: translateX(-50%) scaleX(0);
      transition: all 0.4s;
      }
   &:hover::after{
    // width:100%;
    transform: translateX(-50%) scaleX(1); 
   }
}
.visible { visibility: visible; }
    .invisible { visibility: hidden; }
</style>
