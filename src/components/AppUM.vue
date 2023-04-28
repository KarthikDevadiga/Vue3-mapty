<template>
  <div class="page-downContainer">
    <svg class="vlc">
      <use xlink:href="images/sprite.svg#icon-traffic-cone"></use>
    </svg>
    Under Maintainance
  </div>
</template>

<style>
.vlc {
  height: 30vw;
  width: 30vw;
  fill: rgba(105, 107, 108, 0.447);
}
.page-downContainer {
  grid-row: 2/6;
  grid-column: 4/12;
  font-family: 'Alfa Slab One', cursive;
  color: rgba(105, 107, 108, 0.447);
  font-size: 48px;
  display: flex;
  flex-flow: column;
  justify-items: center;
  align-items: center;
  letter-spacing: 5px;
}
</style>
