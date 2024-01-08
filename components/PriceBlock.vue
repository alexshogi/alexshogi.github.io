<template>
  <section
    id="prices"
    class="block-content"
  >
    <h2>Цены</h2>

    <div class="prices">
      <div class="prices-block">
        <h3>Тренер Дмитрий&nbsp;&mdash; владелец студии</h3>
        <p>
          Направления: Сжигание жира, выносливость, мышечный тонус,
          для здоровья, физкультура, мышечная масса, сила.
        </p>
        <p>Первая тренировка бесплатно.</p>
        <i>Мини группы 2-6 человек</i>
        <ul>
          <li>Разовое занятие 2&nbsp;000&nbsp;₽</li>
          <li>Абонемент на&nbsp;10&nbsp;занятий 17&nbsp;000&nbsp;₽</li>
        </ul>
        <p>Пн. &mdash;&nbsp;сб.&nbsp;с&nbsp;09:00 до&nbsp;23:00</p>
        <p>
          Подробности и&nbsp;запись:
          <a href="tel:+79859886369">
            <img src="/images/phone.svg" alt="call">
            +7(985)988-63-69
          </a>
        </p>
      </div>
      <div class="prices-block">
        <h3>Тренер Григорий</h3>
        <p>
          Направления: Сжигание жира, выносливость, мышечный тонус,
          для здоровья, физкультура, мышечная масса, сила.
        </p>
        <p>Первая тренировка бесплатно.</p>
        <i>Персональные занятия</i>
        <ul>
          <li>Разовое занятие 2&nbsp;500&nbsp;₽</li>
          <li>Абонемент на&nbsp;10&nbsp;занятий 22&nbsp;000&nbsp;₽</li>
        </ul>
        <i>Мини группы 2-6 человек</i>
        <ul>
          <li>Разовое занятие 2&nbsp;000&nbsp;₽</li>
          <li>Абонемент на&nbsp;10&nbsp;занятий 17&nbsp;000&nbsp;₽</li>
        </ul>
        <p>Пн. &mdash;&nbsp;вс.</p>
        <p>
          Подробности и&nbsp;запись:
          <a href="tel:+79281760452">
            <img src="/images/phone.svg" alt="call">
            +7(928)176-04-52
          </a>
        </p>
      </div>
      <div class="prices-block">
        <h3>Тренер Виктория</h3>
        <p>
          Направление: Йога
        </p>
        <ul>
          <li>Разовое занятие 800&nbsp;₽</li>
        </ul>
        <p>
          Подробности и&nbsp;запись:
          <a href="tel:+79037409882">
            <img src="/images/phone.svg" alt="call">
            +7(903)740-98-82
          </a>
        </p>
      </div>
      <div class="prices-block">
        <h3>Тренер Елена</h3>
        <p>Направление: Пилатес</p>
        <ul>
          <li>Разовое занятие 800&nbsp;₽</li>
        </ul>
        <p>
          Подробности и&nbsp;запись:
          <a
            href="https://t.me/Pilateselen"
            target="_blank"
            rel="nofollow"
            aria-haspopup="false"
            aria-label="Соцсети, telegram"
          >
            <img src="/images/tg.svg" alt="telegram">
            @Pilateselen
          </a>
        </p>
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
    border-radius: 8px;
  }

  .prices-block:after {
    position: absolute;
    content: "";
    width: 50px;
    height: 50px;
    background-color: rgba(245, 81, 81, 0.99);
    right: -10px;
    top: -10px;
    border-radius: 8px;
  }

  .prices-block p {
    line-height: 24px;
  }

  .prices-block a {
    color: #F55151;
    display: inline-flex;
    align-items: center;
  }

  .prices-block a img {
    margin-right: 8px;
  }
</style>
