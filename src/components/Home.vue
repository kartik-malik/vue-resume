.<template>
     <header-section></header-section>
     <image-grid></image-grid>
       <project-grid></project-grid>
       <footer-section></footer-section>
       
</template>
<script>
import FooterSection from './Footer'
import HeaderSection from './Header.vue';
import ImageGrid from './ImageGrid'
import ProjectGrid from './ProjectGrid';
export default {
    components:{
         HeaderSection,
    ImageGrid,
    ProjectGrid,
    FooterSection
    }
}
</script>