<template>
  <!-- <router-view :to="{ name: 'user' }"></router-view> -->
  <router-view name="main"></router-view>

  <!-- component for header -->

  <!-- <div v-for="us"></div> -->
</template>

<script>
import { mapState, mapActions } from 'pinia';
import useModalStore from './stores/modal';
// import { onMounted } from 'vue';

export default {
  name: 'App',
  data() {
    return {
      f: 'jks',
    };
  },

  computed: {
    ...mapState(useModalStore, ['users']),
  },
  methods: {
    ...mapActions(useModalStore, ['fetchAllUsers']),
    debug() {
      console.log(this.users);
    },
  },
  mounted() {
    // console.log(this.f);
    this.fetchAllUsers();
  },
  // }
};
</script>
