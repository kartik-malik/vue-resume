<template>

 <div  id="mySidepanel" class="sidepanel" ref="sidepanel">
           <a href="javascript:void(0)" class="closebtn" @click="hideBar">&times;</a>
  <a href="#" class="sidepanel__links">About</a>
  <a href="#" class="sidepanel__links">Services</a>
  <a href="#" class="sidepanel__links">Clients</a>
  <a href="#" class="sidepanel__links">Contact</a>
     </div>
   <div class="" :class="[sidebar?'main__grid-2':'main__grid']">
     <div class="side-bar" @click="setBarVisible" >
  <button class="nav-btn" @click="setBarVisible"></button>
    
    
 
</div >
    <div @click="hideBar">
      <Home/>
    </div>
   </div>
</template>






<script>

import './styles/main.scss';
import Home from './components/Home.vue'
export default {

  name: 'App',
  components:{
   Home
    
    },
   data(){
     return {
       sidebar:false
     }
   },
   methods:{
     setBarVisible(){
       this.sidebar=!this.sidebar;
       document.getElementById("mySidepanel").style.width="200px";
     },
     hideBar(){
    
       document.getElementById("mySidepanel").style.width="0";
         this.sidebar=false;
       
     }
   }
}
</script>

<style lang="scss">
 .main__grid{
   display: grid;
   grid-template-columns: min-content min-content;
   grid-template-columns: 50px 1fr;
 }
 .main__grid-2{
   display: grid;
   grid-template-columns: 200px 1fr;

 }
 .side-bar {
   background-color: #373B44;
 }
 .nav-btn{
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
  color:#373B44

}


</style>
