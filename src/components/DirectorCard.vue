<template>
  <div class="director_card">
    <div class="card">
      <div class="front_card">
        <div class="card_wrapper">
          <main class="front_card_wrapper">
            <div class="front_card_info">

              <div class="card_container">
                <img class="card_img" src="../images/phone.svg" alt="">
                <div class="img_text">
                  <a href="tel:+79693031111">+7 (969) 303-11-1</a><br>
                  <a href="tel:+78612033833">+7 (861) 203-38-33</a>
                </div>
              </div>

              <div class="card_container">
                <img class="card_img" src="../images/email.svg" alt="">
                <div class="img_text">
                  <a href="mailto:partner.m2309@mail.ru">partner.m2309@mail.ru</a>
                </div>
              </div>

              <div class="card_container">
                <img class="card_img" src="../images/location.svg" alt="">
                <div class="img_text">
                  Краснодарский край,<br>
                  г. Кранодар,<br>
                  ул. Старокубанская<br>
                  143/2, офис 7 350075
                </div>
              </div>

            </div>

            <div class="line"></div>

            <div class="front_card_logo">
              <div class="card_logo">
                <img class="logo" src="../images/logo.png" alt="">
                <h1 class="card_header_title">Ашуров Виталий</h1>
                <h1 class="subtitle">директор</h1>
                <div class="social_media">
                  <a class="link" href="https://wa.me/79693031111"><img class="social_media_img"
                      src="../images/whatsapp.svg" alt=""></a>
                  <a class="link" href="https://t.me/Ziv1329"><img class="social_media_img" id="last_social_media_img"
                      src="../images/telegram.svg" alt=""></a>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>

      <div class="back_card">
        <div class="card_wrapper">

          <main class="back_card_wrapper">
            <div class="back_card_logo">
              <div class="card_logo">
                <img class="logo" src="../images/logo.png" alt="">
                <h1 class="card_header_title">ASHUROV VITALY</h1>
                <h1 class="subtitle">director</h1>
                <div class="social_media">
                  <a class="link" href="https://wa.me/79693031111"><img class="social_media_img"
                      src="../images/whatsapp.svg" alt=""></a>
                  <a class="link" href="https://t.me/Ziv1329"><img class="social_media_img" id="last_social_media_img"
                      src="../images/telegram.svg" alt=""></a>
                </div>
              </div>
            </div>

            <div class="line"></div>

            <div class="back_card_info">
              <div class="back_card_info_container">
                <div class="card_container">
                  <img class="card_img" src="../images/phone.svg" alt="">
                  <div class="img_text">
                    <a href="tel:+79693031111">+7 (969) 303-11-11</a><br>
                    <a href="tel:+78612033833">+7 (861) 203-38-33</a>
                  </div>
                </div>

                <div class="card_container">
                  <img class="card_img" src="../images/email.svg" alt="">
                  <div class="img_text">
                    <a href="mailto:vit.aks@mail.ru">vit.aks@mail.ru</a>
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
a {
  text-decoration: none;
  color: #fef477;
}

.director_card {
  font-family: 'Tahoma';
  font-size: 14px;
  box-sizing: border-box;
  height: 100vh;
  color: #fef477;
  background: rgb(247, 247, 247);
  display: flex;
  justify-content: center;
  align-items: center;
  /* добавляем высоту контейнеру для наглядности центрирования */
}

.card {
  min-width: 580px;
  max-width: 580px;
  height: 650px;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid #fff;
}

.card_wrapper {
  width: 525px;
  height: 80%;
  margin: 0 auto;
}

.front_card {
  width: 100%;
  height: 320px;
  margin-bottom: 10px;

  background: url("../images/bg_for_directors.png");
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
}

/* .card_header {
  margin-bottom: 30px;
} */

.front_card_wrapper {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.front_card_info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 50%;
  position: relative;
}

.social_media {
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
}

.line {
  content: '';
  top: 0;
  right: -10%;
  height: 100%;
  border-right: 3px dotted #ffd066;
}

.card_container {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.2rem;

  font-size: 1.1rem;
  line-height: 1.6rem;
}

.card_img {
  width: 2rem;
  margin-right: 1rem;
}

.social_media_img {
  width: 2rem;
  margin-right: 1rem;
}

#last_social_media_img {
  margin-right: 0;
}


.img_text {
  margin: auto 0;
  text-align: left;
}

.back_card {
  width: 100%;
  height: 320px;

  background: url("../images/bg_for_directors.png");
  background-size: cover;
  background-repeat: no-repeat;

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
  width: 7rem;
  margin: 0 auto;
}

.card_header_title {
  font-size: 1.7rem;
  font-weight: 700;
  text-align: center;
}

.subtitle {
  font-size: 1.7rem;
  text-align: center;
}

.back_card_info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 50%;
  position: relative;
}

.back_card_logo {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.front_card_logo {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

@media(max-height: 650px) {
  .director_card {
    height: 100%;
  }
}

@media(max-width: 585px) {
  .card {
    min-width: 483px;
    max-width: 483px;
    height: 540px;
  }

  .card_wrapper {
    width: 438px;
  }

  .front_card {
    height: 265px;
  }

  .social_media {
    margin-top: .8rem;
  }

  .card_container {
    margin-bottom: 1rem;
    font-size: .9rem;
    line-height: 1.3rem;
  }

  .card_img {
    width: 1.7rem;
    margin-right: .83rem;
  }

  .social_media_img {
    width: 1.7rem;
    margin-right: .83rem;
  }

  .back_card {
    height: 265px;
  }

  .logo {
    width: 5.8rem;
  }

  .card_header_title {
    font-size: 1.3rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.3rem;
  }
}

@media(max-width: 480px) {
  .director_card {
    position: relative;
  }

  .card {
    position: absolute;
    top: 1%;
    min-width: 403px;
    max-width: 403px;
    height: 450px;
  }

  .card_wrapper {
    width: 365px;
  }

  .front_card {
    height: 220px;
  }

  .social_media {
    margin-top: .66rem;
  }

  .card_container {
    margin-bottom: .83rem;
    font-size: .75rem;
    line-height: 1.08rem;
  }

  .card_img {
    width: 1.7rem;
    margin-right: .83rem;
  }

  .social_media_img {
    width: 1.4rem;
    margin-right: .7rem;
  }

  .back_card {
    height: 220px;
  }

  .logo {
    width: 4.8rem;
  }

  .card_header_title {
    font-size: 1.08rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.08rem;
  }
}

@media(max-width: 405px) {
  .card {
    min-width: 336px;
    max-width: 336px;
    height: 375px;
  }

  .card_wrapper {
    width: 304px;
  }

  .front_card {
    height: 182.5px;
  }

  .social_media {
    margin-top: .55rem;
  }

  .card_container {
    margin-bottom: .69rem;
    font-size: .63rem;
    line-height: .9rem;
  }

  .card_img {
    width: 1.4rem;
    margin-right: .69rem;
  }

  .social_media_img {
    width: 1.17rem;
    margin-right: .58rem;
  }

  .back_card {
    height: 182.5px;
  }

  .logo {
    width: 4rem;
  }

  .card_header_title {
    font-size: .9rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: .9rem;
  }
}

@media(max-width: 340px) {
  .card {
    min-width: 280px;
    max-width: 280px;
    height: 312px;
  }

  .card_wrapper {
    width: 253px;
  }

  .front_card {
    height: 151px;
  }

  .social_media {
    margin-top: .46rem;
  }

  .card_container {
    margin-bottom: .58rem;
    font-size: .53rem;
    line-height: .75rem;
  }

  .card_img {
    width: 1.17rem;
    margin-right: .58rem;
  }

  .social_media_img {
    width: .98rem;
    margin-right: .48rem;
  }

  .back_card {
    height: 151px;
  }

  .logo {
    width: 3.3rem;
  }

  .card_header_title {
    font-size: .75rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: .75rem;
  }
}
</style>
