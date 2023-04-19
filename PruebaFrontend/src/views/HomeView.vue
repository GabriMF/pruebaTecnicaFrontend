<script setup>
import { onBeforeMount, ref, computed } from 'vue';
import BeerService from "../services/BeerService";
import Browser from '../components/browserComp.vue'
import beerCard from '../components/beerCard.vue';

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
  <main>
    <Browser v-model="searchBeer" />
    <beerCard v-for="beer in filteredBeers" :beer="beer" />
  </main>
</template>

<style>
/* main {
  background-color: rgb(207, 0, 0);
} */

section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  justify-content: center;
  align-items: center;
}
</style>