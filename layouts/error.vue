<template>
  <v-app dark>
    <main class="error-page">
      <h1>Ой, такой страницы нет</h1>
      <nuxt-link :to="{ path: '/' }">
        <h3>Перейти на главную</h3>
      </nuxt-link>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
};
</script>

<style>
.error-page {
  height: calc(100vh - 77px);
  padding: 20px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-page h1 {
  margin-bottom: 90px;
}

.error-page h3 {
  color: #F55151;
}
</style>
