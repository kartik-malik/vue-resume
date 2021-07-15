<template>
  <div>
          <h3 class="detail_heading-2 animate__animated animate__slideInRight"
          :class="{'animate_animated animated_slideInRight':false}"
     v-observe-visibility="{callback:isVisibleNow,intersection:{
            threshold: 1,
       },once:true}"
          > {{name}}</h3>
       <div class="detail__p">
           {{desc}}
        </div>
</div>   
        <img class="detail__image" :src="require(`../assets/${source}`)" alt="">
             

</template>

<script>
export default {
     data(){
         return {
             isVisible:false,
         }
     },
     props:['source',"name","href","desc"],
 methods:{
        isVisibleNow(isVisible){
        this.isVisible=isVisible;
        
        
        }
    }
}
</script>

<style scoped>
h3 {
    background: linear-gradient(45deg, rgba(0,34,36,1) 0%, rgba(9,115,121,1) 0%, rgba(0,31,255,1) 100%);
    background-clip: text;
    color: transparent;
    font-size: 4rem;
}
</style>
