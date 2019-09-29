<template>
  <div class="container container_contacts">
    <div class="container__details">
      <h1
        class="container__details--heading container__details--heading_themed"
      >
        Связаться со <span class="text-highlight">мной</span>.
      </h1>
    </div>
    <div class="container_contacts--content">
      <p>VKontakte: <a href="https://vk.com/igorryzhenkov">igorryzhenkov</a></p>
      <p>Telegram: <a href="https://tele.gg/voknehzyr">@voknehzyr</a></p>
      <p>
        Twitter: <a href="https://twitter.com/igorryzhenkov">igorryzhenkov</a>
      </p>
      <p>
        Email:
        <a href="mailto:ryzhenkov.igor@gmail.com">ryzhenkov.igor@gmail.com</a>
      </p>
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
