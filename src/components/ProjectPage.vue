<template>
<h1 class="detail__heading">
    Project
         <div class="detail">

    <Details v-for="detail in details" :key="detail.source" :source="detail.source" :name="detail.name"
     :desc="detail.desc"
     
     />
         </div>
</h1>
   
</template>
<script>
import Details from './ProjectDetails.vue'
export default {
    components:{
        Details
    },
    data(){
        return {
            isVisible:false,
                 details:[
               {
                   source:"react.png",
                   name:"Random choice",
                   href:"https://react-whatshouldido-app.herokuapp.com/",
                   desc:`Let the random choice generator make a quick decision for you by picking a choice from a selection list of items you provide. It's a quick and easy decision maker.
This tool is great for making a decision in trivial matters (should I continue building a mobile app or take a nap or etc). When you have many things to do at once, let this tool pick a random choice for you.
`
               },
               {
                   source:"budget.png",
                   name:"Budget Manager",
                   href:"https://e-budget.herokuapp.com/",
                   desc:' Budget Manager help you to track your expenses, incomes, bills and always stay with-in budget. Menu Screen designed in way to do your things in most easy way and as quick as possible.'
               },
                {
                   source:"yelpcamp.png",
                   name:"Yelp Camp",
                  href:"https://glacial-harbor-75639.herokuapp.com/",
                  desc:`YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on udemy.
This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.`
               }
           ]
            
        }
    },
   
}
</script>

<style lang="scss" >
.detail{
    display: grid;
    // height: 30vh;
    padding:8rem 3rem;
    grid-row-gap: 10rem;
    grid-template-rows: repeat(auto-fit,min-content);
    grid-template-columns:  repeat(auto-fit,minmax(350px,1fr)) ;
  &__image{
     height: 70%;
     align-self: center;
     width: 50%;
     justify-self: center;
  }
  &__heading {
      text-align: center;
  }
  &__p{
      font-size: 2.2rem;
  }
  
}
@media screen {
      .detail{
          grid-gap: 5rem;
          &__image{
              width: 40%;
          }
      }
  }
  .isVisible {
      transition: all 0.5s;
      transform: translateX(-6rem);
  }
</style>