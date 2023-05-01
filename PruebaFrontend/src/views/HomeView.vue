<script setup>
import { onBeforeMount, ref, computed } from 'vue';
import BeerService from "../services/BeerService";
import Browser from '../components/browserComp.vue';
import beerCard from '../components/beerCard.vue';
import detailsPopup from '../components/detailsPopup.vue';

const beerService = new BeerService();
const beers = ref([]);
const searchBeer = ref("");

onBeforeMount(async () => {
  await beerService.fetchAllBeers();
  beers.value = beerService.getBeers();
});

const filteredBeers = computed(() => {
  if (!searchBeer.value) return beers.value
  return beers.value.filter(beer =>
    beer['name'].toLowerCase().includes(searchBeer.value.toLowerCase())
  )
})
</script>

<template>
  <section>
    <Browser v-model="searchBeer" />
    <div class="cardSection">
      <beerCard v-for="beer in filteredBeers" :beer="beer" />
    </div>




    <!-- <div class="cardSection">
      <detailsPopup v-for="beer in filteredBeers" :beer="beer" />
    </div>  -->
  </section>
</template>

<style lang="scss">
*{
  margin: 0px;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .cardSection {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3vw;
    justify-content: center;
    align-items: center;
  }
}
</style>