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
          :class="{'link-on-select' : current_intrest === 'Profile'}"
          >Profile</a
        >
        <a
          href="#"
          class="nav-link__link"
          @click.prevent="current_intrest = 'Reporting'"
          :class="{'link-on-select' : current_intrest === 'Reporting'}"
          >Reporting</a
        >
        <a
          href="#"
          class="nav-link__link"
          @click.prevent="current_intrest = 'Role'"
          :class="{'link-on-select' : current_intrest === 'Role'}"
          >Role</a
        >
        <a
          href="#"
          class="nav-link__link"
          @click.prevent="current_intrest = 'Performance'"
          :class="{'link-on-select' : current_intrest === 'Performance'}"
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
    <!-- <div v-show="!showChat" class="chat" @click="showChat = !showChat">
      <div class="chat__chating-div">Lo chat</div>
      <div class="chat__icon-u">LO</div>
    </div>

    <div
      v-show="showChat"
      class="chat-window"
      :class="{ growing: isAnimation, 'shrinking': isAnimation }"
    >
      <div v-show="showChat" class="chat" @click="showChat = !showChat">
        <div class="chat__chating-div">Lo chat</div>
        <div class="chat__icon-u">LO</div>
      </div> -->
    <!-- </div> -->
    <div class="chat" :class="{ active: chatActive }" @click="toggleChat($event)">
    Click here to chat
    <div class="chat__icon-u" ></div>
    
      <div class="chat-window" :class="{ growing: chatActive, shrinking: !chatActive }">
        <div>click here to close</div>
        <div v-for="Cuser in users" :key="user" v-show="Cuser.name != user.name" class="chat-window__profile" @click.prevent="chatWithser(Cuser)">
          <img class="chat-window__img" :src="Cuser.profilepicture" alt="hehe" />
          <p class="chat-window__name">{{ Cuser.name }}</p>
        </div>
        <div>
          <div class="closing-icon"></div>
        </div>
      </div>
    </div>
    <div class="chating-div" :class="{ 'chating-div-display': chatingActive }">
      <div  class="chat-window__profile chating-profile" >
          <img class="chat-window__img" :src="currentChatingUser.profilepicture" alt="hehe" />
          <p class="chat-window__name">{{ currentChatingUser.name }}</p>
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
      current_intrest: 'Profile',
      chatActive: false,
      chatingActive: false,
      currentChatingUser:'',
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
    toggleChat(event) {
      console.log(event);
      const target = event.target;
      console.log(target);
      if (!target.parentNode.classList.contains('chat-window__profile')) {
        // Perform the action only if the class is not present
        // Do something here...
        this.chatActive = !this.chatActive;
        if(this.chatingActive){
          this.chatingActive = false;
        }
      }
      
      // this.chatingActive = !this.chatingActive
      
      
    },
    chatWithser(user){
      this.currentChatingUser = user
      // this.chatingActive = !this.chatingActive;
      if(!this.chatingActive){
        this.chatingActive = true;
      }
    }
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
