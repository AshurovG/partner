<template>
  <div class="director_card">
    <div class="card">
      <div class="front_card">
        <div class="card_wrapper">
          <header class="card_header">
            <h1 class="card_header_title">Ашуров Виталий</h1>
            <h1 class="card_header_title subtitle">директор</h1>
          </header>

          <main class="front_card_wrapper">
            <div class="front_card_info">

              <div class="card_container">
                <img class="card_img" src="../images/phone.svg" alt="">
                <div class="img_text">
                  +7 (969) 303-11-11<br>
                  +7 (861) 203-38-33
                </div>
              </div>

              <div class="card_container">
                <img class="card_img" src="../images/email.svg" alt="">
                <div class="img_text">
                  partner.m2309@mail.ru
                </div>
              </div>

              <div class="card_container">
                <img class="card_img" src="../images/location.svg" alt="">
                <div class="img_text">
                  350075, Краснодарский<br>
                  край, г. Кранодар,<br>
                  ул. Старокубанская<br>
                  143/2, офис 7
                </div>
              </div>

            </div>

            <div class="social_media">
              <div class="rr">
                <img class="social_media_img" src="../images/whatsapp.svg" alt="">
                <img class="social_media_img" src="../images/telegram.svg" alt="">

              </div>
              <img src="../images/bottles.svg" alt="" class="bottles_img">
            </div>
          </main>
        </div>
      </div>

      <div class="back_card">
        <div class="card_wrapper">
          <header class="card_header">
            <h1 class="card_header_title">ASHUROV VITALY</h1>
            <h1 class="card_header_title subtitle">director</h1>
          </header>

          <main class="back_card_wrapper">
            <div class="back_card_logo">
              <img class="logo" src="../images/logo.svg" alt="">
              <h2 class="logo_title">
                LLC "Partner"
              </h2>
            </div>
            <div class="back_card_info">

              <div class="card_container">
                <img class="card_img" src="../images/phone.svg" alt="">
                <div class="img_text">
                  +7 (969) 303-11-11<br>
                  +7 (861) 203-38-33
                </div>
              </div>

              <div class="card_container">
                <img class="card_img" src="../images/email.svg" alt="">
                <div class="img_text">
                  vit.aks@mail.ru
                </div>
              </div>

              <div class="card_container">
                <img class="card_img" src="../images/location.svg" alt="">
                <div class="img_text">
                  Krasnodarskiy Krai,<br>
                  Krasnodar, 143/2<br>
                  Starokubanskaya<br>
                  str., office 7, 350075
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DirectorCard',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {}

.director_card {
  font-size: 14px;
  color: #fef477;
  background: rgb(247, 247, 247);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* добавляем высоту контейнеру для наглядности центрирования */
}

.card {
  max-width: 584px;
  height: 663px;
  background-color: #fff;
  font-family: 'Tahoma';
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #fff;
}

.back_card {
  min-width: 584px;
}

.card_wrapper {
  width: 400px;
  padding-left: 5rem;
}

.front_card {
  width: 100%;
  height: 324px;
  margin-bottom: 15px;

  background: red url("../images/bg_for_directors.svg");

  display: flex;
  align-items: center;
}

.card_header {
  margin-bottom: 30px;
}

.front_card_wrapper {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.front_card_info {
  width: 65%;
  height: auto;
  position: relative;
}

.social_media {
  margin-top: 1.2rem;
  position: relative;
  width: 35%;
}

.front_card_info::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  border-right: .2rem dotted #ffd066;
}

.card_container {
  display: flex;
  margin-bottom: 10px;

  font-size: 1.1rem;
  line-height: 1.3rem;
}


.bottles_img {
  position: absolute;
  width: 11rem;
  bottom: -.5rem;
  right: -3.5rem;
}

.card_img {
  width: 2rem;
  margin-right: 1rem;
}

.social_media_img {
  width: 2rem;
  margin-right: .5rem;
}


.img_text {
  margin: auto 0;
  text-align: left;
}

.back_card {
  width: 100%;
  height: 324px;
  margin-bottom: 30px;

  background: red url("../images/bg_for_directors.svg");

  display: flex;
  align-items: center;
}

.back_card_wrapper {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.back_card_logo {}

.logo {
  display: block;
  width: 8.5rem;
  margin: 0 auto;
}

.card_header_title {
  font-size: 1.8rem;
  text-align: center;
}

.logo_title {
  font-size: 1.2rem;
  margin-top: -1.3rem;
  ;
  text-align: center;
}

.back_card_info {
  height: auto;
  position: relative;
  margin-right: -2.5rem;
}

.back_card_info::before {
  content: '';
  position: absolute;
  top: 0;
  left: -2.5rem;
  height: 100%;
  border-right: .2rem dotted #ffd066;
}
</style>
