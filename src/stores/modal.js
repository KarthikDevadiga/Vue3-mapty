import { defineStore } from 'pinia';

//modal is ID here
export default defineStore('modal', {
  state: () => ({
    boolean: 'false',
    users: [],
    current_user: 1,
  }),
  actions: {
    async fetchAllUsers(state) {
      try {
        const res = await fetch('https://panorbit.in/api/users.json');
        const usersReturned = await res.json();
        const { users } = usersReturned;

        users.forEach((ele) => {
          if (!this.$state.users.includes(ele)) {
            this.$state.users.push(ele);
          }
        });
        // console.log(this.$state.users);
      } catch (error) {
        console.log(error);
      }
    },
    // changeCurrentUser({ commit }, payload) {
    //   console.log(payload);
    // },
  },
});
