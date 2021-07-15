.<template>
     <header-section></header-section>
     <image-grid></image-grid>
       <project-grid></project-grid>
       <div ref="footer" class="isVisible" v-observe-visibility="{callback:pr,intersection:{
            threshold: 0,
       },once:true}"> 
       <footer-section   ></footer-section>
       </div>
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
    },
    data(){
         return {
              isVisible:false,
              counter:0
         }
    },
    methods:{
         pr(isVisible){
              this.isVisible=isVisible;
              if(this.isVisible)
               this.$refs.footer.style.transform="translateY(0)";
         }
    }
}
</script>
<style scoped>

.isVisible {
 transform: translateY(6rem);
 transition: all 0.2s;
}
</style>