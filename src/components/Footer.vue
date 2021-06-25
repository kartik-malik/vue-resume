<template>
    <footer class="footer">
     <ul class="footer__list">
         <li class="footer__item"><a href="" class="footer__link"><i class="fab fa-twitter"></i>Twitter</a></li>
         <li class="footer__item"><a href="" class="footer__link"><i class="fab fa-linkedin-in"></i>Linked In</a></li>
         <li class="footer__item"><a href="" class="footer__link"><i class="fab fa-facebook-square"></i>Facebook</a></li>
     </ul>
     <p class="footer__text">&#169; Projects mentioned above are learned from various courses and not owned </p>
    </footer>
</template>
<style lang="scss" scoped>
.footer{
    background-color: #373B44;
 

  flex-wrap: wrap;
  padding: 10rem;
  &__list{
       justify-content: space-between;  display: flex;
      list-style: none;
      padding-bottom: 1rem;
      border-bottom: 2px solid white;
  }
  &__link{
      text-decoration: none;
      color: white;
      .fab {
         margin-right: 2rem;
      }
  }

}
</style>