<template>
<div>
 <div  id="mySidepanel" class="sidepanel" ref="sidepanel">
           <a href="javascript:void(0)" class="closebtn" @click="hideBar">&times;</a>
  <router-link to="/" class="sidepanel__links" >Home</router-link>
  <router-link to="/about" class="sidepanel__links">About</router-link>
  <router-link to="/projects" class="sidepanel__links">Projects</router-link>
  <router-link to="/contact" class="sidepanel__links">Contact </router-link>
     </div>
   <div class="" :class="[sidebar?'main__grid-2':'main__grid']">
     <div class="side-bar"  >
     <div @click="setBarVisible">  <button class="nav-btn" ></button>
</div>    
    
 
</div >
    <div @click="hideBar"  class="mainContainer" >
         <Modal v-if="modalVisible" @toggleModal="toggleModal"></Modal>

      <router-view @toggleModal="toggleModal"/>
    </div>
   </div>
   </div>
</template>






<script>

import './styles/main.scss';
// import axios from 'axios'
// import Home from './components/Home.vue'
import Modal from './components/Modal.vue'
export default {

  name: 'App',
  components:{

    Modal
    },
   data(){
     return {
       sidebar:false,
       isLoggedIn:false,
       username:'',
       error:null,
       modalVisible:false
     }
   },
   provide(){
     return {
       username:this.username,

     }
   },
   methods:{
     setBarVisible(){
       this.sidebar=!this.sidebar;
       this.$refs.sidepanel.style.width="20%";
     },
     hideBar(){
    
       this.$refs.sidepanel.style.width="0%";
         this.sidebar=false;
       
     },
     toggleModal(){
       console.log('modal');
       this.modalVisible=!this.modalVisible;
     },
     toggleModalAndSideBar(){
      //  this.modalVisible=false;
       this.sidebar=false;
        
     }
   }
}
</script>

<style lang="scss">
.mainContainer{
  position: relative;
}
#app{
  height: 100%;
}
 .main__grid{
   display: grid;
   grid-template-columns: min-content min-content;
   grid-template-columns: 5% 95%;
   height: 100%;
   
 }
 .main__grid-2{
   display: grid;
   height: 100%;
   
   grid-template-columns: 20% 80%;

 }
 .side-bar {
   background-color: #373B44;
 }
 .nav-btn{
   content: "";
    border: none;
    border-radius: 0;
    background-color: white;
    height: 2.5px;
    width: 4.5rem;
    margin-top: 4rem;
    &::after,&::before{
        background-color: #fff;
        height: 2px;
        width: 4.5rem;
        content: "";
    display: block;}
    &::after{
        transform: translateY(1.3rem);
    }
    &::before{ transform:translateY(-1.5rem);}
    @media screen and (max-width:900px){
        margin-top: 0;
        margin-right: 2rem;
        &::after{
            transform: translateY(1.0rem);
        }
    &::before{ transform:translateY(-1.3rem);}

    }
}
.sidepanel-block{
  transition: all 0.5s;
}
.sidepanel {
  height: 100%; /* Specify a height */
 width: 0px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  
  background-color: white; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
   /* Place content 60px from the top */
   transition:all 0.5s;/* 0.5 second transition effect to slide in the sidepanel */
}


.sidepanel__links{
  text-decoration: none;
   background-image: linear-gradient(to right bottom,#4286f4,#373B44);
        text-align: center;
        color:transparent;
        background-clip: text;
  transition: all 0.2s; 
} 
.sidepanel__links:hover{
  transform: skewY(-7deg);
}
.closebtn {
  // position: absolute;
  // right: 10px;
  text-decoration: none;
  color:#373B44;
  text-align: right;
  padding-right: 4rem;
  font-size:5rem
   
}
.sidepanel__links{
  padding-bottom: 3rem;
}


</style>
