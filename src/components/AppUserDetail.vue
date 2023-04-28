<template>
    <div class="main-content-user">
      <div class="profile-pic">
        <img class="profile-pic__img" :src="user.profilepicture" alt="hehe" />
        <h3>{{ user.name }}</h3>
      </div>
      <div class="profile-description">
        <!-- <div class="profile-description__key"> -->
        <p class="profile-description__key-p">
          Username <span class="semi">:</span>
        </p>
        <h3 class="profile-description__value-p">{{ user.username }}</h3>

        <p class="profile-description__key-p">
          e-mail <span class="semi">:</span>
        </p>
        <h3 class="profile-description__value-p">{{ user.email }}</h3>

        <p class="profile-description__key-p">
          Phone <span class="semi">:</span>
        </p>
        <h3 class="profile-description__value-p">{{ user.phone }}</h3>

        <p class="profile-description__key-p">
          Website <span class="semi">:</span>
        </p>
        <!-- </div> -->
        <!-- <div class="profile-description__value"> -->
        <h3 class="profile-description__value-p">{{ user.Website }}</h3>
        <!-- </div> -->
      </div>
      <div class="company-description">
        <p class="company-description__sub">Company</p>
        <div class="comp-det">
          <p class="company-description__key-p">
            Name <span class="semi">:</span>
          </p>
          <h3 class="company-description__value-p">{{ user.company.name }}</h3>

          <p class="company-description__key-p">
            catchPhrase <span class="semi">:</span>
          </p>
          <h3 class="company-description__value-p">
            {{ user.company.catchPhrase }}
          </h3>

          <p class="company-description__key-p">
            Phone <span class="semi">:</span>
          </p>
          <h3 class="company-description__value-p">{{ user.phone }}</h3>
        </div>
      </div>
    </div>

    <div class="location">
      <div class="location__details">
        <p class="address-sub">Address <span class="semi-adress">:</span></p>
        <div class="location-description">
          <!-- <div class="profile-description__key"> -->
          <p class="profile-description__key-p">
            Street <span class="semi">:</span>
          </p>
          <h3 class="profile-description__value-p">
            {{ user.address.street }}
          </h3>

          <p class="profile-description__key-p">
            suite <span class="semi">:</span>
          </p>
          <h3 class="profile-description__value-p">{{ user.address.suite }}</h3>

          <p class="profile-description__key-p">
            ZipCode <span class="semi">:</span>
          </p>
          <h3 class="profile-description__value-p">
            {{ user.address.zipcode }}
          </h3>
        </div>
      </div>
      <div id="map"></div>
    </div>

</template>

<script>
export default {
  props: ['user'],
  mounted() {
    const lat = this.user.address.geo.lat;
    const lng = this.user.address.geo.lat;

    const map = L.map('map').setView([lat, lng], 7); // map is the id here
    console.log(L);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup('Guess logitude and latitude are randoms')
      .openPopup();
  },
};
</script>