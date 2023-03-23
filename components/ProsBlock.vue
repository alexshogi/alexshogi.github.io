<template>
  <section
    id="pros"
    class="block-pros block-content"
  >
    <h2>Возможности</h2>
    <div class="pros">
      <div class="edge">
        Персональные тренировки
      </div>
      <div class="edge">
        Сжигание жира
      </div>
      <div class="edge">
        Выносливость
      </div>
      <div class="edge">
        Мышечный тонус
      </div>
      <div class="edge">
        Мышечная масса
      </div>
      <div class="edge">
        Сила
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProsBlock',
};
</script>

<style lang="scss" scoped>
.block-pros {
  padding-bottom: 30px;
}

.pros {
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.edge {
  display: flex;
  padding: 32px;
  width: calc(50% - 120px);
  z-index: 1;
  font-size: 24px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 60px;
  margin-bottom: 32px;
  background-color: rgba(245, 81, 81, 0.85);
}

@media (max-width: 769px) {
  .edge {
    width: 100%;
    margin: 0;
    margin-bottom: 32px;
  }
}
</style>
