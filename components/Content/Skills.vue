<template>
  <div class="skills-container">
    <p class="mb-6">
      Я стараюсь развивать свои навыки и смотреть в сторону новых технологий,
      здесь я привел небольшую подборку часто используемых мной инструментов для
      работы.
    </p>
    <div class="skills">
      <div v-for="skill in skills" :key="skill.name" class="skill">
        <div
          v-if="skill.icon"
          v-html="require(`/assets/icons/${skill.icon}.svg?raw`)"
          class="skill__icon"
          :class="[`text-${skill.color}`]"
        />
        <div class="skill__info">
          <p :class="[`text-${skill.color}`]">{{ skill.name }}</p>
          <UIProgressBar
            :color="skill.color"
            :text="skill.text"
            :progress="skill.score"
            size="small"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Skills',
  data() {
    const skills = [
      {
        name: 'JavaScript',
        icon: 'javascript',
        score: 80,
        color: 'gray-700',
        text: 'Синтаксис, DOM, Fetch, Модульность',
      },
      {
        name: 'Node.js',
        icon: 'nodedotjs',
        score: 60,
        color: 'green-900',
      },
      {
        name: 'Vue',
        icon: 'vuedotjs',
        score: 55,
        color: 'secondary-600',
        text: 'Nuxt, SPA, Компоненты',
      },
      {
        name: 'React',
        icon: 'react',
        score: 20,
        color: 'blue-500',
        text: 'Next.js',
      },
      {
        name: 'Figma',
        icon: 'figma',
        score: 65,
        color: 'pink-500',
        text: 'Простой дизайн, Плагины',
      },
      {
        name: 'MongoDB',
        icon: 'mongodb',
        score: 50,
        color: 'secondary-700',
      },
      {
        name: 'Git',
        icon: 'git',
        score: 10,
        color: 'red-600',
      },
      {
        name: 'C Sharp',
        icon: 'csharp',
        score: 25,
        color: 'secondary-900',
        text: 'Основы, UI',
      },
      {
        name: 'CSS',
        icon: 'css3',
        score: 95,
        color: 'blue-600',
        text: 'SCSS, LESS, Stylelint, Tailwind',
      },
      {
        name: 'HTML',
        icon: 'html5',
        score: 95,
        color: 'orange-500',
        text: 'Блоки, Meta, SEO',
      },
    ].sort(function (a, b) {
      return b.score - a.score
    })

    return {
      skills: skills,
    }
  },
})
</script>

<style lang="postcss" scoped>
.skills-container {
  @apply flex flex-col flex-nowrap mr-4;
}

.skills {
  @apply flex flex-col gap-4 flex-wrap;
}

.skill {
  @apply flex flex-row items-center rounded-2xl bg-primary-100 p-4;
}
.skill__icon {
  @apply h-8 w-8 rounded-md md:h-16 md:w-16 fill-current md:rounded-2xl overflow-hidden;
}
.skill__info {
  @apply mx-4 flex-grow;
}
.skill__info p {
  @apply font-semibold mb-1 text-xl;
}
</style>
