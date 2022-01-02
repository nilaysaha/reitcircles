<template>
  <div>
    <!-- <div style="position: relative;" class="border-gradient border-gradient-grey">
      <img class="footer-img mb-n2" src="@/assets/footer.png" alt srcset />

      <div class="group-image">
        <img class="img" src="@/assets/Group1.png" alt srcset />
        <img class="img" src="@/assets/Group2.png" alt srcset />
      </div>
    </div>
    <div class="footer-context">
      <v-container class="d-flex align-center">
        <div class="d-flex align-center">
          <img alt=" Logo" src="@/assets/logo.png" transition="scale-transition" style="width:40px" />
          <span class="ml-4">Cookie Policy</span>
          <v-divider color="white" class="ml-4 mr-2 my-4" vertical></v-divider>
          <span>Contact</span>
          <v-divider color="white" class="ml-4 mr-2 my-4" vertical></v-divider>

          <span>Term of Use</span>
          <v-divider color="white" class="ml-4 mr-2 my-4" vertical></v-divider>

          <span>Imprint</span>
          <v-divider color="white" class="ml-4 mr-2 my-4" vertical></v-divider>

          <span>Data Protection</span>
        </div>
        <v-spacer></v-spacer>

        <div
          :class="$vuetify.breakpoint.mdAndUp?'logo-section':''"
          class="d-flex align-center justify-space-between"
        >
          <img src="@/assets/discord-footer.png" alt />
          <img src="@/assets/facebook.png" alt />
          <img src="@/assets/instagram.png" alt />
          <img src="@/assets/twitter.png" alt />
          © CYAClub, All rights reserved
        </div>
      </v-container>
    </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.border-gradient {
  border: 10px solid;
  border-image-slice: 1;
  border-width: 12px 16px;
}

 .border-gradient-grey {
  border-image-source:  linear-gradient(to left, #726F6F, #707070,#726F6F);
  /* border-image-source: ; */
}
.footer-img{
  object-fit: contain;
  width: 100%
}
.group-image{
  position: absolute;
  top: 0;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  .img{
    object-fit: contain;
    max-width: 180px;
  }
}
.footer-context{
  background-color: black;
  color: white;
}
.logo-section{
  width: 520px;
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 1200px) {
  .group-image{
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .img{
      object-fit: contain;
      max-width: 110px;
    }
  }
}
@media screen and (max-width: 1020px) {
  .group-image{
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .img{
      object-fit: contain;
      max-width: 70px;
    }
  }
}
@media screen and (max-width: 600px) {
  .group-image{
    position: absolute;
    top: 0;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    
    justify-content: space-between;
    width: 100%;
    .img{
      object-fit: contain;
      max-width: 50px;
    }
  }
}
@media screen and (max-width: 420px) {
  .group-image{
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;

    justify-content: space-between;
    width: 100%;
    .img{
      object-fit: contain;
      max-width: 35px;
    }
  }
}
</style>