/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('template').del();
  await knex('template').insert([
    { 
      id: 1,
      label: 'Header', 
      text: 'Text of template',
      type: 0,
      code: 
`
    <style>
    .none {
        display: none !important;
    }

    .header {
        font-family: 'Poppins', sans-serif;
        padding: 31px 0 100px;
        height: 800px;
        color: #fff;
        background-color: black;
        background-size: cover;
        background-image: url({header_img});
        background-position: center center;
        border-radius: 0 0 54px 54px;
    }

    .header a {
        color: #fff;
    }

    .container {
        margin: 0 auto;
        max-width: 1440px;
        padding: 0 32px;
    }

    .container--header {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* Nav */

    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 30px;
    }

    .logo {
        flex-shrink: 0;
    }

    .nav-list {
        display: flex;
        column-gap: 54px;
        font-size: 14px;
        font-weight: 300;
        text-transform: capitalize;
    }

    .nav-list__link {
        opacity: 0.7;
    }

    .nav-list__link--active {
        opacity: 1;
    }

    /* User */

    .user {
        display: flex;
        column-gap: 8px;
        align-items: center;
    }

    .user__content {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .user__greeting {
        opacity: 0.5;
    }

    .user__name {
        font-weight: 600;
    }

    .user__avatar {
        position: relative;
    }

    .user__avatar::after {
        position: absolute;
        right: 0;
        top: 0;
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        background-color: #ff0000;
        border-radius: 50%;
    }

    .user__img {
        border-radius: 50%;
    }

    /* Header Content */

    .header__content {
        display: flex;
        flex-direction: column;
        row-gap: 32px;
        align-items: center;
        text-align: center;
    }

    .header__title {
        font-weight: 600;
        font-size: 48px;
        line-height: 1.3;
    }

    /* Form */

    .form {
        display: flex;
        align-items: center;
        align-self: center;
        width: 1140px;
        height: 88px;
        padding: 8px;
        color: #000;
        background-color: #fff;
        border-radius: 12px;
    }

    .form__input-wrapper {
        display: flex;
        flex-direction: column;
        padding: 15px 20px 16px 56px;
        background-repeat: no-repeat;
        background-position: 16px 24px;
    }

    .form__input--location {
        width: 300px;
        background-image: url({map_img});
    }

    .form__input--activity {
        width: 255px;
        background-image: url({activity_img});
    }

    .form__input--guests {
        width: 255px;
        background-image: url({guests_img});
    }

    .form__input--date {
        width: 255px;
        background-image: url({calendar_img});
    }

    .form__label {
        font-size: 14px;
        font-weight: 300;
        color: #5B5B5B;
    }

    .form__input {
        color: #161414;
        font-weight: 500;
        font-size: 16px;
    }

    .form__input::placeholder {
        color: #000;
    }
</style>

<style>
    @media (max-width: 1230px) {
        .form {
            width: auto;
            height: auto;
        }

        .form__input--when {
            width: 200px;
        }

        .form__input--guests {
            width: 140px;
        }

        .form__input--activity {
            width: 180px;
        }

        .autoComplete_wrapper > input {
            width: auto !important;
        }
    }

    @media (min-width: 1139px) {
        .mobile-nav-btn {
            z-index: 999;
            display: none;
        }
    }

    @media (max-width: 1139px) {
        .header {
            height: auto;
            min-height: 500px;
            border-radius: 0 0 40px 40px;
        }

        .container--header {
            justify-content: flex-start;
            row-gap: 90px;
        }

        .header__title {
            font-size: 32px;
        }

        .nav-list {
            display: none;
        }
        .nav__user {
            display: none;
        }

        .mobile-nav-btn {
            --time: 0.1s;
            --width: 40px;
            --height: 30px;
            --line-height: 4px;
            --color: #fff;

            height: 40px;
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            display: block;
        }
    }

    @media (max-width: 1040px) {
        .form {
            width: auto;
            height: auto;
            flex-direction: column;
        }

        .form__input-wrapper {
            width: 100%;
        }

        .button--search {
            width: 100%;
        }
    }
</style>

<style>
    /* Nav Icon */
    .nav-icon {
        position: relative;
        width: var(--width);
        height: var(--line-height);
        background-color: var(--color);
    }

    .nav-icon::before,
    .nav-icon::after {
        content: '';
        display: block;

        position: absolute;
        left: 0;

        width: var(--width);
        height: var(--line-height);

        background-color: var(--color);
        transition: transform var(--time) ease-in,
            top var(--time) linear var(--time);
    }

    .nav-icon::before {
        top: calc(var(--line-height) * -2);
    }

    .nav-icon::after {
        top: calc(var(--line-height) * 2);
    }

    .nav-icon.nav-icon--active {
        background-color: transparent;
    }

    .nav-icon.nav-icon--active::before,
    .nav-icon.nav-icon--active::after {
        top: 0;
        transition: top var(--time) linear,
            transform var(--time) ease-in var(--time);
    }

    .nav-icon.nav-icon--active::before {
        transform: rotate(45deg);
    }

    .nav-icon.nav-icon--active::after {
        transform: rotate(-45deg);
    }
</style>

<style>
    .no-scroll {
        overflow-y: hidden;
    }

    .mobile-nav {
        position: fixed;
        top: 0;
        right: -320px;
        width: 320px;
        height: 100%;
        z-index: 99;

        display: flex;
        flex-direction: column;

        align-items: flex-start;
        padding:40px;

        /* background: linear-gradient(209deg, #4287b3 -17.38%, #133f6b 78.4%), #276195; */
        background-color: #141d22;
        transition: all 0.3s ease-in;
    }

    .mobile-nav--open {
        right: 0;
    }

    .mobile-nav a {
        color: #fff;
    }

    .mobile-nav a:hover, .mobile-nav a.active {
        color: #a998ff;
    }

    .mobile-nav__list {
        display: grid;
        gap: 20px;
        text-transform: capitalize;
    }

    .mobile-nav-fade {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(19 29 34 / 70%);
        z-index: 98;

        opacity: 0;
        transition: opacity 0.2s ease-in;
        pointer-events: none;
    }


    .mobile-nav-fade--open {
        opacity: 1;
        pointer-events: all;
    }

</style>

<style>
    .button {
        background: #7b61ff;
        border-radius: 12px;
        color: #fff;

        transition: background-color 0.2s ease-in;
    }

    .button:hover {
        background-color: #6344ff;
    }

    .button--huge {
        padding: 24px;
        font-size: 18px;
        font-weight: 600;

        display: flex;
        column-gap: 8px;
        align-items: center;
    }

    @media only screen and (max-width: 600px) {
        .button--huge {
            padding: 12px;
            font-size: 16px;
        }
    }

    .button--search {
        width: 60px;
        height: 60px;
        padding: 18px;
    }

    .button--subscribe {
        width: 72px;
        height: 72px;
        padding: 28px;
    }

    /* Button More */

    .button-more {
        display: flex;
        align-items: center;
        gap: 4px;

        padding: 10px;
        height: 44px;
        background: #F6F4FF;
        border-radius: 12px;
        font-size: 16px;
        color: #5243C2;

        transition: background-color 0.2s ease-in;
    }

    .button-more:hover {
        background: #dcd8f1;
    }

</style>

<header id="header" class="header">
    <div class="container container--header">

        <nav class="nav">
            <a href="#!" class="logo">
                <img id="logo_img" src="{logo_img}" alt="2Rism" />
            </a>

            <ul class="nav-list">
                <li class="nav-list__item">
                    <a
                        id="first_link"
                        href={first_link_href}
                        class="nav-list__link nav-list__link--active"
                        >{first_link_text}</a
                    >
                </li>
                <li class="nav-list__item">
                    <a id="second_link" href="#" class="nav-list__link">hotels</a>
                </li>
                <li class="nav-list__item">
                    <a id="third_link" href="#" class="nav-list__link">restaurants</a>
                </li>
                <li class="nav-list__item">
                    <a id="fourth_link" href="#" class="nav-list__link">tours</a>
                </li>
                <li class="nav-list__item">
                    <a id="fifth_link" href="#" class="nav-list__link">destinations</a>
                </li>
                <li class="nav-list__item">
                    <a id="sixth_link" href="#" class="nav-list__link">activities</a>
                </li>
                <li class="nav-list__item">
                    <a id="seventh_link" href="#" class="nav-list__link">contact</a>
                </li>
            </ul>

            <div class="nav__user">
                <div class="user">
                    <div class="user__content">
                        <span id="user__greeting" class="user__greeting">Holla,</span>
                        <span id="user__name" class="user__name">Ales Nesetril</span>
                    </div>
                    <div class="user__avatar">
                        <img id="user_img" class="user__img" src="{user_img}" alt="Avatar">
                    </div>
                </div>
            </div>

            <button class="mobile-nav-btn">
                <div class="nav-icon"></div>
            </button>
        </nav>

        <div class="header__content">
            <h1 id="header__title" class="header__title">
                Discover the most engaging places
            </h1>
            <button id="header-main-button" class="button button--huge">
                <img id="global_img" src={global_img} alt="">
                Discover on 3D Globe
            </button>
        </div>

        <form action="" class="form">

            <div id="map_img" class="form__input-wrapper form__input--location">
                <label for="location" class="form__label">Location</label>
                <input autocomplete="off" type="text" class="form__input" id="location" placeholder="Explore nearby destinations">
            </div>

            <div id="activity_img" class="form__input-wrapper form__input--activity">
                <label for="activity" class="form__label">Activity</label>
                <select name="activity" id="activity" class="form__select">
                    <option value="all">All Activities</option>
                    <option value="Culture">Culture</option>
                    <option value="Sport">Sport</option>
                    <option value="Extreme">Extreme</option>
                </select>
            </div>

            <div id="calendar_img" class="form__input-wrapper form__input--date">
                <label for="date" class="form__label">When</label>
                <input type="text" class="form__input" id="date" placeholder="Choose a Date">
            </div>

            <div id="guests_img" class="form__input-wrapper form__input--guests">
                <label for="location" class="form__label">Guests</label>
                <select name="" id="" class="form__select">
                    <option value="">1 guest</option>
                    <option value="">2 guest</option>
                    <option value="">3 guest</option>
                    <option value="">4 guests or more</option>
                </select>
            </div>

            <button class="button button--search">
                <img id="search_img" src="{search_img}" alt="Search">
            </button>
        </form>

    </div>
</header>

<div class="mobile-nav-fade"></div>
<div class="mobile-nav">
    <ul class="mobile-nav__list">
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#" >hotels</a></li>
        <li><a href="#" >restaurants</a></li>
        <li><a href="#" >tours</a></li>
        <li><a href="#" >destinations</a></li>
        <li><a href="#" >activities</a></li>
        <li><a href="#" >contact</a></li>
    </ul>
</div>

<script>
    // Mobile nav button
    const navBtn = document.querySelector('.mobile-nav-btn');
    const nav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.nav-icon');
    const fade = document.querySelector('.mobile-nav-fade');

    navBtn.onclick = function () {
        nav.classList.toggle('mobile-nav--open');
        fade.classList.toggle('mobile-nav-fade--open');
        menuIcon.classList.toggle('nav-icon--active');
        document.body.classList.toggle('no-scroll');
    };

    fade.onclick = function () {
        nav.classList.toggle('mobile-nav--open');
        fade.classList.toggle('mobile-nav-fade--open');
        menuIcon.classList.toggle('nav-icon--active');
        document.body.classList.toggle('no-scroll');
    };
</script>

<script>
    customSelect('select');

    const picker = new easepick.create({
        element: document.getElementById('date'),
        css: ['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css'],
        format: 'DD.MM.YY',
    });

    /* Subscribe Label */

    const inputSubscribe = document.querySelector('.subscribe__input');
    const label = document.querySelector('.subscribe__label');

    inputSubscribe.addEventListener('input', () => {
        if (inputSubscribe.value.trim() !== '') {
            label.classList.add('subscribe__label--top');
        } else {
            label.classList.remove('subscribe__label--top');
        }
    });
</script>
`
    },
    { 
      id: 2,
      label: 'Block', 
      text: 'Text of template',
      type: 2,
      code: `
        <style>
          * {
            padding: 0px;
            margin: 0px;
            border: none;
          }

          .subscribe {
            height: 100vh;
            width: 100%;
            overflow: hidden;
            position: relative;
            background: white;
            background: linear-gradient(132.05deg, #428e5f -17.38%, #112120 78.4%), #204434;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .subscribe__content {
            display: flex;
            flex-direction: column;
            align-items: center;

            text-align: center;
          }

          .subscribe__title {
            color: white;
            margin-bottom: 60px;
            max-width: 494px;
            font-size: 55px;
            font-weight: 600;
          }

          .subscribe-form {
            padding: 12px 15px 12px 46px;
            border-radius: 35px;
            background-color: #fff;

            display: flex;
            column-gap: 20px;
          }

          .sub__inp {
            background-color: white;
            color: black;
            font-size: 24px;
            font-weight: 500;
          }

          .subscribe-form__input::placeholder {
            color: var(--secondary);
          }
        </style>

        <script>
          function showAlert(e) {
            console.log(e)
            alert('write here send action');
          }
        </script>

        <section class="subscribe">
          <div class="container">
            <div class="subscribe__content">
              <h2 id="title" class="subscribe__title">{title}</h2>
                <form class="subscribe-form">
                  <input id="placeholder" type="email" class="sub__inp" placeholder={placeholder} />
                  <button id="button_text" type="button" onclick="showAlert(event)" class="btn btn--subscribe">{button_text}</button>
                </form>
            </div>
          </div>
        </section>
      `
    },
  ]);
};
