<template>
  <div class="tw-bg-white">
    <div class="tw-bg-primary tw-flex tw-space-x-44 tw-items-center tw-py-20">
      <div>
        <v-img src="@/assets/img/logo.png"></v-img>
      </div>
      <div class="tw-flex tw-space-x-96 tw-text-sm tw-text-white">
        <div class="tw-flex tw-flex-col tw-space-y-2">
          <span>Dashboard</span>
          <span>Listings</span>
          <span>Offters</span>
        </div>
        <div class="tw-flex tw-flex-col tw-space-y-2">
          <span>Settinng</span>
          <span>Wallet</span>
          <span>Profile</span>
        </div>
      </div>
    </div>
    <v-container class="tw-flex tw-justify-between tw-items-center tw-py-8 tw-text-secondary">
      <div>Copyright 2021 Reitcircles All rights reserved</div>
      <div class="tw-flex tw-space-x-2">
        <span>Privacy policy</span>
        <span>Terms & condition</span>
        <span>Legal policy</span>
      </div>
      <div class="tw-flex tw-items-center">
        <span>Follow us on</span>
        <v-btn icon>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </div>
    </v-container>
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