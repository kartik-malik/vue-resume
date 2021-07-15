<template>
    <div class="about__grid">
       <h4>Personal details</h4>
    <div class="personal">
      <div class="personal-col-1">
        <h5>Gender </h5><span>Male</span>
        <h5>Current Address</h5><span>D-1/20-21 Sec-11 Rohini Delhi-85, New Delhi, Delhi,
India - 110085</span>
<h5>Email</h5><span>kartikmalikboss@gmail.com</span>
      </div>
      <div class="personal-col-2">
        <h4>Skills</h4>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JS</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Reactjs</li>
          <li>Vue.js</li>
          <li>Typescript</li>
          <li>C++</li>

        </ul>
      </div>
    </div>
    </div>

</template>

<style scoped lang="scss">
  .about{
    &__grid{
        padding: 3rem;
        // text-align: center;
    }
  }

  .personal {
    display: flex;
    &-col-1{
       width: 40%;
       span{
         font-size: 2rem;
       }
    }
    &-col-2{
      width :60%;
      h4{
        text-align: center;
      }
     ul{
         font-size: 1.8rem;
         li {
           margin: 0  auto;
           width: 60%;
         }
       }
    }
  }
  @media screen and (max-width:700px) {
    .personal {
      
      flex-direction: column;
      h4{
        text-align: left;
        margin-bottom: 0;
      }
      ul {
        padding:1rem 3rem;
        li{
        width: 100%;
      }
      }
    }
  }
</style>