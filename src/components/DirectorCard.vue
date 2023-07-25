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
.director_card {
  font-family: 'Tahoma';
  font-size: 14px;
  box-sizing: border-box;
  overflow: auto;
  height: 100vh;
  color: #fef477;
  background: rgb(247, 247, 247);
  display: flex;
  justify-content: center;
  align-items: center;
  /* добавляем высоту контейнеру для наглядности центрирования */
}

.card {
  min-width: 584px;
  max-width: 584px;
  height: 663px;
  background-color: rgb(247, 247, 247);
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid #fff;
}

/* .back_card {
  min-width: 584px;
} */

.card_wrapper {
  width: 400px;
  padding-left: 5rem;
}

.front_card {
  width: 100%;
  height: 324px;
  margin-bottom: 15px;

  background: url("../images/bg_for_directors.svg");

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
  /* margin-bottom: 30px; */

  background: red url("../images/bg_for_directors.svg");

  display: flex;
  align-items: center;
}

.back_card_wrapper {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

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



@media(max-width: 600px) {
  .card {
    max-width: 467px;
    min-width: 467px;
    height: 530px;
  }

  .front_card {
    height: 260px;
    margin-bottom: 10px
  }

  .back_card {
    height: 260px;
  }

  .card_wrapper {
    width: 320px;
    padding-left: 4rem;
  }

  .card_header {
    margin-bottom: 24px;
  }

  .social_media {
    margin-top: .96rem;
  }

  .card_container {
    display: flex;
    margin-bottom: 8px;

    font-size: .88rem;
    line-height: 1.04rem;
  }

  .bottles_img {
    width: 8.8rem;
    bottom: -.4rem;
    right: -2.8rem;
  }

  .card_img {
    width: 1.6rem;
    margin-right: .8rem;
  }

  .social_media_img {
    width: 2rem;
    margin-right: .5rem;
  }

  .logo {
    width: 6.8rem;
  }

  .card_header_title {
    font-size: 1.44rem;
  }

  .logo_title {
    font-size: .96rem;
    margin-top: -1.04rem;
  }

  .back_card_info {
    margin-right: -2rem;
  }
}

@media(max-width: 480px) {
  .card {
    max-width: 350px;
    min-width: 350px;
    height: 398px;
  }

  .front_card {
    height: 195px;
    margin-bottom: 8px
  }

  .back_card {
    height: 195px;
  }

  .card_wrapper {
    width: 240px;
    padding-left: 3rem;
  }

  .card_header {
    margin-bottom: 18px;
  }

  .social_media {
    margin-top: .72rem;
  }

  .card_container {
    display: flex;
    margin-bottom: 6px;

    font-size: .66rem;
    line-height: 0.78rem;
  }

  .bottles_img {
    width: 6.6rem;
    bottom: -.3rem;
    right: -2.1rem;
  }

  .card_img {
    width: 1.2rem;
    margin-right: .6rem;
  }

  .social_media_img {
    width: 1.5rem;
    margin-right: .375rem;
  }

  .logo {
    width: 5.1rem;
  }

  .card_header_title {
    font-size: 1.08rem;
  }

  .logo_title {
    font-size: .72rem;
    margin-top: -0.78rem;
  }

  .back_card_info {
    margin-right: -1.5rem;
  }
}
</style>
