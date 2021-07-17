<template>
  <div class="max-w-screen-2xl m-auto">
    <UIBottomPop
      @modalToggle="skillsModalToggle = !skillsModalToggle"
      :toggled="skillsModalToggle"
      ><template v-slot:title>Мои навыки</template
      ><template v-slot:content><ContentSkills /></template
    ></UIBottomPop>
    <div class="leading-container">
      <div class="leading">
        <div class="my-auto">
          <h1 class="leading__title">
            rogi<span class="text-primary-500">27</span>@dev:~$
          </h1>
          <p class="leading__paragraph">
            Я занимаюсь разработкой
            <span class="text-primary-500">интуитивно понятных</span> и
            <span class="text-primary-500">легких</span> сайтов и приложений.
            Мои силы направлены на создание максимально
            <span class="text-primary-500">удобного</span> интерфейса с
            использованием
            <span class="text-primary-500">минимального</span> количества
            <span class="text-primary-500">кода</span>.
          </p>
          <div class="leading__buttons">
            <UIButton
              href="javascript:void(0)"
              theme="primary"
              size="large"
              v-on:click.native="skillsModalToggle = !skillsModalToggle"
              >Какими навыками я обладаю?</UIButton
            >
            <UIButton href="javascript:void(0)" size="large"
              >Связаться со мной</UIButton
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row xl:flex-col gap-4 pb-12">
        <a href="javascript:void(0)"
          ><UIPromoCard class="from-primary-400 to-primary-600 h-full">
            <template v-slot:icon>
              <BeakerIcon size="2.0x" />
            </template>
            <template v-slot:title> Над чем я работаю? </template>
            <template v-slot:info>
              У меня не слишком большой список завершенных проектов, но в
              некоторые из них я стараюсь вложить все свое свободное время.
            </template>
          </UIPromoCard></a
        >
        <a href="javascript:void(0)"
          ><UIPromoCard class="from-secondary-300 to-secondary-600 h-full">
            <template v-slot:icon>
              <BookOpenIcon size="2.0x" />
            </template>
            <template v-slot:title> Узнать больше </template>
            <template v-slot:info class="text-secondary-200">
              Личный блог в котором я публикую различную информацию для себя и
              других.
            </template>
          </UIPromoCard></a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BookOpenIcon, BeakerIcon } from '@vue-hero-icons/outline'

export default Vue.extend({
  data() {
    return { skillsModalToggle: false }
  },
  beforeMount() {
    if (this.$route.hash === '#skills') this.$data.skillsModalToggle = true
  },
  components: {
    BookOpenIcon,
    BeakerIcon,
  },
})
</script>

<style lang="postcss" scoped>
.leading-container {
  height: 80vh;
  @apply flex flex-col -mb-12 xl:flex-row gap-6 m-auto items-center;
}
.leading {
  @apply flex flex-wrap col-span-3 rounded-2xl leading-tight py-16;
}
.leading__title {
  @apply flex text-black-900 items-center tracking-normal text-6xl font-bold mb-8;
}
.leading__paragraph {
  @apply text-3xl font-medium text-background-900 text-opacity-50 leading-tight;
}
.leading__buttons {
  @apply flex flex-nowrap flex-col flex-grow md:flex-row items-center mt-8 gap-4;
}
.leading__buttons .button {
  @apply w-full justify-center md:w-auto md:justify-center;
}
</style>
