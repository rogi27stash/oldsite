<template>
  <div>
    <div class="container container-section container-intro">
      <div class="container__content">
        <i18n path="homepage.intro.greeting" tag="h1">
          <span>{{ $t("homepage.intro.greeting2") }}</span>
        </i18n>
        <div class="container__btn-group">
          <a href="#about" class="button">{{
            $t("homepage.intro.about_btn")
          }}</a>
          <router-link to="/contacts" class="button">{{
            $t("homepage.intro.contact_btn")
          }}</router-link>
        </div>
      </div>
    </div>
    <div id="about" class="container container-section container-about">
      <div class="container__content">
        <div>
          <h1>{{ $t("homepage.about.heading") }}</h1>
          <p v-html="$t('homepage.about.about', [$t('homepage.about.about2')])">
            >
          </p>
        </div>
        <div>
          <img class="face" src="@/assets/img/face.jpg" />
        </div>
      </div>
    </div>
    <div id="skills" class="container container-section container-skills">
      <div class="container__content">
        <h1>{{ $t("homepage.skills.heading") }}</h1>
        <div class="skills-switcher">
          <a
            href="javascript:void(0);"
            :class="{ active: currentCategory == 0 }"
            @click="currentCategory = 0"
            >{{ $t("homepage.skills.btns.frontend") }}</a
          >
          <a
            href="javascript:void(0);"
            :class="{ active: currentCategory == 1 }"
            @click="currentCategory = 1"
            >{{ $t("homepage.skills.btns.backend") }}</a
          >
          <a
            href="javascript:void(0);"
            :class="{ active: currentCategory == 2 }"
            @click="currentCategory = 2"
            >{{ $t("homepage.skills.btns.additional") }}</a
          >
        </div>
        <transition name="slider" mode="out-in">
          <div key="1" v-if="currentCategory == 0" class="skills-page">
            <div>
              <i18n path="homepage.skills.sections.frontend.title" tag="h1">
                <span>{{
                  $t("homepage.skills.sections.frontend.title2")
                }}</span>
              </i18n>
              <p>
                {{ $t("homepage.skills.sections.frontend.desc") }}
              </p>
            </div>
            <div>
              <Skills category="0" />
            </div>
          </div>
          <div key="2" v-if="currentCategory == 1" class="skills-page">
            <div>
              <i18n path="homepage.skills.sections.backend.title" tag="h1">
                <span>{{ $t("homepage.skills.sections.backend.title2") }}</span>
              </i18n>
              <p>
                {{ $t("homepage.skills.sections.backend.desc") }}
              </p>
            </div>
            <div>
              <Skills category="1" />
            </div>
          </div>
          <div key="3" v-if="currentCategory == 2" class="skills-page">
            <div>
              <i18n path="homepage.skills.sections.additional.title" tag="h1">
                <span>{{
                  $t("homepage.skills.sections.additional.title2")
                }}</span>
              </i18n>
              <p>
                {{ $t("homepage.skills.sections.additional.desc") }}
              </p>
            </div>
            <div>
              <Skills category="2" />
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div id="skills" class="container container-section container-contact">
      <div class="container__content">
        <h1>
          {{ $t("homepage.contact.title") }}
          <span>{{ $t("homepage.contact.title_2") }}</span>
        </h1>
        <router-link class="button" to="/contacts">{{
          $t("homepage.contact.btn_contact")
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PremidLogo from "../assets/img/premid.png";
import Skills from "../components/Skills";

export default {
  name: "home",
  components: {
    Skills
  },
  data() {
    return {
      currentCategory: 0,
      PremidLogo
    };
  },
  mounted() {}
};
</script>
