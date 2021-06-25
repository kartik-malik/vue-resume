<template>
<div>
    <h2 class="project-grid__heading">
       Learning  Projects
    </h2>
    <div class="project-grid">
        <project-item v-for="detail in details" :key="detail.source" :source="detail.source" :name="detail.name"></project-item>

    </div>
</div>
</template>

<script>
import ProjectItem from './ProjectItem'
export default {
    data(){
        return {
           details:[
               {
                   source:"react.png",
                   name:"Random choice",
               },
               {
                   source:"budget.png",
                   name:"Budget Manager",
               },
                {
                   source:"yelpcamp.png",
                   name:"Yelp Camp",
               }
           ]
        };
    },
    components:{
        ProjectItem
            }
}
</script>
<style lang="scss" scoped>

.project-grid{
    &__heading{
        font-size:3.5rem;
        background-image: linear-gradient(to right bottom,#4286f4,#373B44);
        text-align: center;
        color:transparent;
        background-clip: text;
    }
    padding: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
    grid-template-rows: 40vh;
    gap:10rem;
    margin: 10rem;
}
</style>