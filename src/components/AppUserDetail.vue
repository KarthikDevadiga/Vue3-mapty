<template>
    <div class="main-content-user">
      <div class="profile-pic">
        <img class="profile-pic__img" :src="user.profilepicture" alt="hehe" />
        <h3>{{ user.name }}</h3>
      </div>
      <div class="key-value">
      
        <div class="comp-det">
          <p class="key-value__key-p">
            Username <span class="semi">:</span>
          </p>
          <h3 class="key-value__value-p">{{ user.username }}</h3>

          <p class="key-value__key-p">
            e-mail <span class="semi">:</span>
          </p>
          <h3 class="key-value__value-p">
            {{  user.email  }}
          </h3>

          <p class="key-value__key-p">
            Phone <span class="semi">:</span>
          </p>
          <h3 class="key-value__value-p">{{ user.phone }}</h3>

          <p class="key-value__key-p">
            website <span class="semi">:</span>
          </p>
          <h3 class="key-value__value-p">{{ user.Website }}</h3>
        </div>
        <!-- </div> -->
      </div>
      <div class="margin-user"></div>
      <div class="key-value">
        <p class="key-value__sub">Company</p>
        <div class="comp-det">
          <p class="key-value__key-p">
            Name <span class="semi">:</span>
          </p>
          <h3 class="key-value__value-p">{{ user.company.name }}</h3>

          <p class="key-value__key-p">
            catchPhrase <span class="semi">:</span>
          </p>
          <h3 class="key-value__value-p">
            {{ user.company.catchPhrase }}
          </h3>

          <p class="key-value__key-p">
            Phone <span class="semi">:</span>
          </p>
          <h3 class="key-value__value-p">{{ user.phone }}</h3>
        </div>
      </div>
    </div>

    <div class="location">
      <div class="user-address">
      <div class="key-value">
        <p class="key-value__sub">Address</p>
        <div class="comp-det">
          <!-- <div class="profile-description__key"> -->
          <p class="key-value__key-p">
            Street <span class="semi">:</span>
          </p>
          <h3 class="key-value__value-p">
            {{ user.address.street }}
          </h3>

          <p class="key-value__key-p">
            suite <span class="semi">:</span>
          </p>
          <h3 class="key-value__value-p">{{ user.address.suite }}</h3>

          <p class="key-value__key-p">
            ZipCode <span class="semi">:</span>
          </p>
          <h3 class="key-value__value-p">
            {{ user.address.zipcode }}
          </h3>
        </div>
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