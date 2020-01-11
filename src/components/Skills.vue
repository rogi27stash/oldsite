<template>
  <div class="skills">
    <div v-for="skill in filteredSkills" :key="skill.title" class="skill-card">
      <div class="logo">
        <img draggable="false" :src="skill.icon" />
      </div>
      <div>
        <h3>{{ skill.title }}</h3>
        <p>
          {{ $t("homepage.skills.knowledge") }}:
          <span :class="knowledgeLevel(skill.level)[0]">{{
            knowledgeLevel(skill.level)[1]
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// Frontend
import JS from "@/assets/img/javascript.png";
import HTML from "@/assets/img/html5.png";
import CSS from "@/assets/img/css3.png";
import SASS from "@/assets/img/sass.png";
import LESS from "@/assets/img/less.png";
import React from "@/assets/img/react.png";
import Vue from "@/assets/img/vuejs.png";

// Backend
import NodeJS from "@/assets/img/nodejs.png";
import PHP from "@/assets/img/php.png";
import Java from "@/assets/img/java.png";
import Laravel from "@/assets/img/laravel.png";
// import CSharp from "@/assets/img/csharp.png";
import MySQL from "@/assets/img/mysql.png";

// Other
import Photoshop from "@/assets/img/photoshop.png";
import Illustrator from "@/assets/img/illustrator.png";
import Figma from "@/assets/img/figma.png";
import VSCode from "@/assets/img/vscode.png";

export default {
  name: "skills",
  props: ["category"],
  data() {
    return {
      cardHovered: false,
      skills: [
        [
          {
            icon: JS,
            title: "JavaScript",
            level: 2
          },
          {
            icon: HTML,
            title: "HTML",
            level: 3
          },
          {
            icon: SASS,
            title: "SASS",
            level: 3
          },
          {
            icon: CSS,
            title: "CSS",
            level: 3
          },
          {
            icon: LESS,
            title: "LESS",
            level: 2
          },
          {
            icon: React,
            title: "React",
            level: 1
          },
          {
            icon: Vue,
            title: "Vue",
            level: 2
          }
        ],
        [
          {
            icon: NodeJS,
            title: "Node.js",
            level: 2
          },
          {
            icon: PHP,
            title: "PHP",
            level: 1
          },
          {
            icon: Java,
            title: "Java",
            level: 2
          },
          {
            icon: Laravel,
            title: "Laravel",
            level: 1
          },
          // {
          //   icon: CSharp,
          //   title: "C#",
          //   level: 1
          // },
          {
            icon: MySQL,
            title: "MySQL",
            level: 2
          }
        ],
        [
          {
            icon: Photoshop,
            title: "Photoshop",
            level: 3
          },
          {
            icon: Illustrator,
            title: "Illustrator",
            level: 2
          },
          {
            icon: VSCode,
            title: "VS Code",
            level: 3
          },
          {
            icon: Figma,
            title: "Figma",
            level: 1
          }
        ]
      ]
    };
  },
  created() {},
  computed: {
    filteredSkills() {
      let clonedArray = this.$data.skills[this.$props.category];

      return clonedArray
        .sort((a, b) => a.title.localeCompare(b.title))
        .sort((a, b) => b.level - a.level);
    }
  },
  methods: {
    knowledgeLevel(level) {
      if (level == 1) {
        return ["low", this.$t("homepage.skills.skill_level1")];
      } else if (level == 2) {
        return ["medium", this.$t("homepage.skills.skill_level2")];
      } else if (level == 3) {
        return ["high", this.$t("homepage.skills.skill_level3")];
      }
    }
  }
};
</script>
