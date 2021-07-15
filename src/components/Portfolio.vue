<template>
<div class="about__container">
      <div class="about__col-1">
        <img  class="about__image" src="../assets/hockneytog.png" alt="">
    </div>
    <div class="about__col-2">
        <h3>Kartik Malik</h3>
        <p>Looking for a challenging role in a reputable organization to utilize my  skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.</p>
    </div>
</div>
    <Details ></Details>
</template>

<script>
export default {
   
}
</script>


<style lang="scss" scoped>
.about{
    &__container{
        padding: 4rem;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;
        @media screen and (max-width:600px) {
           flex-direction: column
           ;
        }
    }
    &__col-1{
        box-shadow: 0 0 3rem rgba(0, 0, 0, 0.3);
        border-radius: 80%;
       
    }
    &__col-2{
        width: 30%;
         @media screen and (max-width:600px) {
           width: 100%;
           
        }
        p{
            font-size: 1.5rem;
        }
    }
    &__image{
        display: block;
        height: 30rem;
        border-radius: 80%;
        
    }

}
</style>