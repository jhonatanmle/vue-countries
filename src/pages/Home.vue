<template>
  <div>
    <Navbar />
    <div class="container mt-4">
      <div class="row">
        <div :key="country.id" v-for="country in countries" class="container-countries col-12 col-md-6 col-lg-4 mb-4">
          <Country :country="country" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Country from "../components/Country";

import { getCountriesByRegion } from "../core/countries";

export default {
  name: "Home",
  data: () => {
    return {
      countries: []
    };
  },
  components: {
    Navbar,
    Country
  },
  mounted: async function() {
    this.countries = await getCountriesByRegion('americas');
  }
};
</script>


<style lang="css" scoped>
  .container-countries {
    display: flex;
    justify-content: center;
  }
</style>
