<template>
  <div class="container container-section container-contacts">
    <div class="container__content">
      <div class="contacts-information">
        <h1>{{ $t("contacts.title") }}.</h1>
        <i18n path="contacts.info" tag="p">
          <a class="underline" href="https://tele.gg/voknehzyr"
            >Telegram (@voknehzyr)</a
          >
          <a class="underline" href="https://vk.com/igorryzhenkov"
            >ВКонтакте (@igorryzhenkov)</a
          >
          <a
            class="underline"
            href="mailto:ryzhenkov.igor@gmail.com?subject=Для вас есть работа"
            >ryzhenkov.igor@gmail.com</a
          >
        </i18n>
        <p>
          {{ $t("contacts.info_ps") }}
        </p>
      </div>
      <div class="contacts-icon">
        <div class="container-figure">
          <i class="icon ion-ios-briefcase"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Контакты"
  },
  data() {
    return {
      projectList: []
    };
  }
};
</script>
