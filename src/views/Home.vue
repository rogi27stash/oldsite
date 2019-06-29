<template>
<div>
  <div class="content portfolio-section">
    <div class="portfolio-section__logo">
      <img src="@/assets/logo2.jpg">
    </div>
    <div class="portfolio-section__info">
      <h1 class="info__heading">Igor «Voknehzyr» Ryzhenkov</h1>
      <p class="info__about">Семнадцатилетний начинающий программист-самоучка из Москвы, изучаю языки программирования <b>C#</b>, <b>Java</b>, <b>JavaScript</b> и <b>Python</b>. В дальнейшем хочу изучить <b>C++</b>, <b>Kotlin</b>, <b>TypeScript</b>. Также занимаюсь переводом приложений с английского на русский язык.</p>
      <p class="info__about">На данный момент я имею среднее общее образование и собираюсь поступать в колледж на программирование в компьютерных системах.</p>
      <div class="info__buttons">
        <router-link class="button" to="/projects">Мои проекты</router-link>
        <router-link class="button" to="/about">Обо мне</router-link>
      </div>
    </div>
  </div>
  <div class="skills-container">
    <div class="waves-divider waves-divider_top">
      <svg style="display: block; max-height: 100px;" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-haxJK1" d="M842.322034,38.0019829 C686.954825,71.1183168 623.386282,53.08497 467.492582,19.4422816 C313.032879,-13.8909426 84.0992497,8.02840272 0,44.7243294 L0,150.727527 L1920,150.727527 L1920,76.8685643 C1512.23604,-35.3595639 1568.70222,67.4289432 1278.62078,31.7541069 C988.539347,-3.92072949 997.689243,4.88564905 842.322034,38.0019829 Z" fill="#000000"></path></svg>
    </div>

    <h1>Cyka blyat</h1>

  </div>
</div>
</template>

<script>
export default {
  name: "home",
};
</script>
