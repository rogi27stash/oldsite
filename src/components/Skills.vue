<template>
  <div>
    <div class="container__details">
      <h1
        class="container__details--heading container__details--heading_themed"
      >
        Мои знания <span class="text-highlight">технологий</span>.
      </h1>
    </div>
    <div class="skill-categories">
      <a
        :class="{ active: 'all' == currentCategory }"
        class="label label_large"
        href="javascript:void(0);"
        @click="changeCategory('all')"
        >Все</a
      >
      <a
        v-for="category in categories"
        :key="category.name"
        class="label label_large"
        :class="{ active: currentCategory == category.id }"
        href="javascript:void(0);"
        @click="changeCategory(category.id)"
        >{{ category.name }}</a
      >
    </div>
    <transition-group tag="div" class="skills-container" name="fade">
      <div
        v-for="skillItem in filteredSkills"
        :key="skillItem.title"
        class="skill-card"
      >
        <div class="logo">
          <img draggable="false" :src="skillItem.icon" />
        </div>
        <div>
          <h3>{{ skillItem.title }}</h3>
          <p>
            Изученность:
            <span
              :class="`label label_` + knowledgeLevel(skillItem.level)[0]"
              >{{ knowledgeLevel(skillItem.level)[1] }}</span
            >
          </p>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Laravel from "../assets/img/laravel.png";
import PHP from "../assets/img/php.png";
import SASS from "../assets/img/sass.png";
import CSS3 from "../assets/img/css3.png";
import React from "../assets/img/react.png";
import VueJS from "../assets/img/vuejs.png";
import NodeJS from "../assets/img/nodejs.png";
import HTML5 from "../assets/img/html5.png";
import Java from "../assets/img/java.png";
import JavaScript from "../assets/img/javascript.png";
import LESS from "../assets/img/less.png";

export default {
  name: "skills",
  data() {
    return {
      Laravel,
      PHP,
      SASS,
      CSS3,
      React,
      VueJS,
      NodeJS,
      HTML5,
      Java,
      JavaScript,
      cardHovered: false,
      currentCategory: "all",
      categories: {
        backend: {
          id: "backend",
          name: "Бэкенд"
        },
        frontend: {
          id: "frontend",
          name: "Фронтенд"
        }
      },
      skillsList: [
        {
          icon: JavaScript,
          title: "JavaScript",
          category: "frontend",
          level: 3
        },
        {
          icon: CSS3,
          title: "CSS3",
          category: "frontend",
          level: 3
        },
        {
          icon: SASS,
          title: "SASS",
          category: "frontend",
          level: 2
        },
        {
          icon: LESS,
          title: "LESS",
          category: "frontend",
          level: 1
        },
        {
          icon: NodeJS,
          title: "Node.js",
          category: "backend",
          level: 2
        },
        {
          icon: VueJS,
          title: "Vue",
          category: "frontend",
          level: 2
        },
        {
          icon: React,
          title: "React",
          category: "frontend",
          level: 1
        },
        {
          icon: Laravel,
          title: "Laravel",
          category: "backend",
          level: 1
        },
        {
          icon: HTML5,
          title: "HTML5",
          category: "frontend",
          level: 3
        },
        {
          icon: PHP,
          title: "PHP",
          category: "backend",
          level: 1
        }
      ]
    };
  },
  created() {},
  computed: {
    filteredSkills() {
      return this.$data.skillsList
        .filter(skill => {
          if (this.currentCategory == "all") return skill;
          if (skill.category == this.currentCategory) {
            return skill;
          }
        })
        .sort((a, b) => a.title.localeCompare(b.title))
        .sort((a, b) => b.level - a.level);
    }
  },
  methods: {
    knowledgeLevel(level) {
      if (level == 1) {
        return ["red", "Слабая"];
      } else if (level == 2) {
        return ["orange", "Средняя"];
      } else if (level == 3) {
        return ["green", "Хорошая"];
      } else {
        return ["red", "Unknown"];
      }
    },
    changeCategory(category) {
      this.$data.currentCategory = category;
    }
  }
};
</script>
