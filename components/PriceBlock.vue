<template>
  <section
    id="prices"
    class="block-content"
  >
    <h2>Цены</h2>

    <div class="prices">
      <div class="prices-block">
        <h3>Тренер Дмитрий – владелец студии</h3>
        <p>
          Направления: сжигание жира, выносливость, мышечный тонус,
          для здоровья, физкультура, мышечная масса, сила.
        </p>
        <p>Первая тренировка бесплатно.</p>
        <i>Мини группы 1-6 человек</i>
        <ul>
          <li>Разовое занятие 2.000₽</li>
          <li>Абонемент на 10 занятий 15.000₽</li>
        </ul>
        <p>
          Пн. - сб. с 9:00 до 23:00
        </p>
        <p>
          Подробности и запись:
          <a href="tel:+79859886369">+7 (985) 988-63-69</a>
        </p>
      </div>
      <div class="prices-block">
        <h3>Тренер Григорий</h3>
        <p>
          Направления: сжигание жира, выносливость, мышечный тонус,
          для здоровья, физкультура, мышечная масса, сила.
        </p>
        <p>Первая тренировка бесплатно.</p>
        <i>Персональные занятия</i>
        <ul>
          <li>Разовое занятие 2.000₽</li>
          <li>Абонемент на 10 занятий 17.000₽</li>
        </ul>
        <i>Сплит-тренировка</i>
        <ul>
          <li>Разовое занятие 1.500₽</li>
          <li>Абонемент на 10 занятий 12.000₽</li>
        </ul>
        <p>
          Пн. - вс.
        </p>
        <p>
          Подробности и запись:
          <a href="tel:+79281760452">+7 (928) 176-04-52</a>
        </p>
      </div>
      <div class="prices-block">
        <h3>Йога</h3>
        <ul>
          <li>Разовое занятие 800₽</li>
        </ul>
      </div>
      <div class="prices-block">
        <h3>Пилатес</h3>
        <ul>
          <li>Разовое занятие 800₽</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PriceBlock',
};
</script>

<style scoped>
  .prices-block {
    margin-bottom: 45px;
    background: rgb(206,206,206);
    background: linear-gradient(135deg, rgb(240, 240, 240) 0%, rgb(160, 160, 160) 100%);
    color: #272727;
    padding: 24px;
    position: relative;
  }

  .prices-block:after {
    position: absolute;
    content: "";
    width: 50px;
    height: 50px;
    background-color: #f55151c2;
    right: -10px;
    top: -10px;
  }

  .prices-block p {
    line-height: 24px;
  }

  .prices-block a {
    color: #F55151;
  }
</style>
