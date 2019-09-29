<template>
  <div class="about">
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectList: []
    };
  }
};
</script>
