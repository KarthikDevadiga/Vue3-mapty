<template>
  <header class="header">
    <div class="navigation">
      <div class="logo">
        <h1 class="logo__heading">Users</h1>
        <p>No.of users</p>
      </div>
      <div class="invite">
        <button class="invite__button">
          <svg class="invite__user-icon">
            <use xlink:href="images/sprite.svg#icon-user"></use>
          </svg>
          Invite user
        </button>
      </div>
    </div>
    <form action="#" class="search">
      <input type="text" class="search__input" placeholder="Search users" />
      <!-- <div class="search-icon-div"> -->
      <button class="search__button">
        <svg class="search__search-icon">
          <use xlink:href="images/sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </button>
      <!-- </div> -->
    </form>
  </header>
</template>
