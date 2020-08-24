<template>
  <div class="card">
    <img :src="country.flag" class="card-img-top" :alt="country.name" />
    <div class="card-body">
      <h5 class="card-title">
        {{ country.name }}
      </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <strong>Código: </strong> {{ country.codigo }}
      </li>
      <li class="list-group-item">
        <strong>Region: </strong> {{ country.region }}
      </li>
      <li class="list-group-item">
        <strong>Población: </strong> {{ country.region }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Country",
  props: {
    country: Object
  }
};
</script>

<style lang="css" scoped>
.card {
  width: 300px;
  height: auto;
  transition: all 0.3s ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

img {
  height: 150px;
  object-fit: cover;
}
</style>
