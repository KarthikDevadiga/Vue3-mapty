<template>
  <div class="container-2">
    <div class="sidebar">
      <div class="nav-link">
        <!-- <router-link :to="{ name: 'userDetail' }" class="nav-link__link"
          >Profile</router-link
        >
        <a href="#" class="nav-link__link">Profile</a>
        <a href="#" class="nav-link__link">Profile</a>
        <a href="#" class="nav-link__link">Profile</a> -->

        <a
          href="#"
          class="nav-link__link"
          @click.prevent="current_intrest = 'Profile'"
          >Profile</a
        >
        <a
          href="#"
          class="nav-link__link"
          @click.prevent="current_intrest = 'Reporting'"
          >Reporting</a
        >
        <a
          href="#"
          class="nav-link__link"
          @click.prevent="current_intrest = 'Role'"
          >Role</a
        >
        <a
          href="#"
          class="nav-link__link"
          @click.prevent="current_intrest = 'Performance'"
          >Performance</a
        >
      </div>
    </div>
    <router-view name="userInfo"></router-view>
    <div class="profile-name">
      <h3 class="sub-h">Profile</h3>
      <div class="profile">
        <img class="profile__img" :src="user.profilepicture" alt="hehe" />
        <p class="profile__name">{{ user.name }}</p>
      </div>
    </div>
    <template v-if="current_intrest == 'Profile'">
      <AppUserDetail :user="user"></AppUserDetail>
    </template>
    <!-- <template><AppUM v-if = "current_intrest != 'Profile'></AppUM></template> -->
    <template v-if="current_intrest != 'Profile'">
      <AppUM></AppUM>
    </template>
    <div v-show="!showChat" class="chat" @click="showChat = !showChat">
      <div class="chat__chating-div">Lo chat</div>
      <div class="chat__icon-u">LO</div>
    </div>

    <div
      v-show="showChat"
      class="chat-window"
      :class="{ growing: isAnimation, shrinking: isAnimation }"
    >
      <div v-show="showChat" class="chat" @click="showChat = !showChat">
        <div class="chat__chating-div">Lo chat</div>
        <div class="chat__icon-u">LO</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import useModalStore from '../stores/modal';
import AppUserDetail from './/AppUserDetail.vue';
import AppUM from './/AppUM.vue';
// import { LMap, LTileLayer, LMarker } from 'vue3-leaflet';
// import L from 'leaflet';
// import L from 'vue2-leaflet';
export default {
  name: 'LandingPage',
  data() {
    return {
      user: {},
      showChat: false,
      isAnimation: false,
      current_intrest: 'data',
    };
  },
  components: {
    AppUserDetail,
    AppUM,
  },
  computed: {
    ...mapState(useModalStore, ['users', 'current_user']),
  },
  methods: {
    fetchAllDetails() {
      const user = this.current_user;
      return this.users[user - 1];
    },
  },
  beforeMount() {
    // console.log(this.f);
    this.user = this.fetchAllDetails();
    console.log(this.user);
  },
  // mounted() {
  //   const lat = this.user.address.geo.lat;
  //   const lng = this.user.address.geo.lat;

  //   const map = L.map('map').setView([lat, lng], 7); // map is the id here
  //   console.log(L);
  //   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution:
  //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //   }).addTo(map);

  //   L.marker([lat, lng])
  //     .addTo(map)
  //     .bindPopup('Guess logitude and latitude are randoms')
  //     .openPopup();
  // },
};
</script>
