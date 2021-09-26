<template>
    <div class="contact">
       <div class="contact__col-1">
           <img src="../assets/email.png" alt=""  class="contact__img">
       </div>
       <div class="contact__col-2">
            <form class="contact__form" @submit.prevent="submitData">
                <label for="name" class="contact__label">Name</label>
           <input type="text" placeholder="Name" id="name" class="contact__input" autofocus>       
         <label for="email" class="contact__label" >Email</label>
        <input type="email" name="email" id="email"  placeholder="email" class="contact__input">
         <label for="subject" class="contact__label">Subject</label>
        <input type="text" placeholder="subject" id="subject" class="contact__input">
         <label for="desc" class="contact__label">Description</label>
                <textarea class="contact__input" name="" id="desc" cols="30" rows="7"></textarea>
        <button type="submit" class="contact__submit">Submit</button>
        </form>
       </div>
    </div>
</template>

<script>
export default {
    methods:{
        submitData(){
            alert("hi");
        }
    }
}
</script>

<style scoped lang="scss">
.contact {
    height: 100%;
    display: flex;
    /* width: 90%; */
    padding: 0 4rem;
/* background: rgb(2,0,36); */
background: linear-gradient( rgba(96,96,193,1) 1%, rgba(19,87,101,1) 98%);   
  margin: 0 auto;
    align-items: center;
}
.contact__input{
    display: block;
    margin-bottom: 3rem;
    padding: 1rem 1.5rem;
    width: 100%;
    border-radius: 0.5rem;
    border: none
}
.contact__input:focus{
    outline: none;
    border: 1px solid rgb(136, 204, 221);
}
.contact__input::placeholder{
    font-weight: bold;
}
.contact__col-1 {
  width: 40%;
  display: flex;
  justify-content: center;
  &:hover {
      animation: hoverEffect 0.5s cubic-bezier(1, 0, 0, 1)   5 ;
      //    animation-delay: 3s;
  }
}
.contact__img{
    /* width: 100%; */
    display: block;
        border-radius: 200px;
}
.contact__col-2 {
    /* display: block; */
 flex: 1;
 padding: 4rem 4rem;
}
.contact__submit {
    margin-top: 2rem;
    padding: 1rem;
    border: none;
    border-radius: 100px;
    color:white;
    background-color: rgb(60, 60, 94);
    width: 30%;
    font-size: 2.5rem;
    height: 5rem;
    transition: all 0.2s;
}
.contact__submit:hover{
    transform: translateY(-10px);
}
.contact__submit:active{
    transform: translateY(10px) ;
}
.contact__form{

}
.contact__label {
    color: aliceblue;
font-size: 2rem;
}
@media screen and (max-width:750px){
    .contact{
        flex-direction: column;
    }
    .contact__col-1{
        height: 20vh;
    }
    .contact__img{
        
        height: inherit;
    }
    .contact__input{
     /* padding: rem; */
      margin-top: 1.5rem;
    }
}
@keyframes hoverEffect {
    from {
                transform:rotate(-40deg);

    }
    to {
                transform:rotate(40deg);

    }
}
</style>