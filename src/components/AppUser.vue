<template>
  <div class="users">
    <div class="users__details">
      <div class="user-name">
        <img class="user-name__img" :src="user.profilepicture" alt="hehe" />
        <p class="user-name__name">{{ user.name }}</p>
      </div>
      <div class="users-details__email">{{ user.email }}</div>
      <div class="users-details__city">{{ user.address.city }}</div>
    </div>

    <div class="status">Logo Acrtive</div>
  </div>
</template>

<script>
export default {
  props: ['user'],
};
</script>

<style></style>
