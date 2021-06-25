<template>
   <div>
    
       <header-section></header-section>
     <image-grid></image-grid>
       <project-grid></project-grid>
       <footer-section></footer-section>
   </div>
</template>






<script>
import FooterSection from './components/Footer'
import HeaderSection from './components/Header.vue';
import ImageGrid from './components/ImageGrid'
import ProjectGrid from './components/ProjectGrid';
import './styles/main.scss';
export default {

  name: 'App',
  components:{
    HeaderSection,
    ImageGrid,
    ProjectGrid,
    FooterSection
    
    }

}
</script>

<style lang="scss">
 
</style>
