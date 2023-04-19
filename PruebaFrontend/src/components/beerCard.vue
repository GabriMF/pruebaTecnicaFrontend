<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        beer: Object,
    });
</script>
<template>
    <div class="card">
        <img class="beerCardImg" :src="beer['image_url']" alt="">
        <p class="beerCardName">{{ beer['name'] }}</p>
        <p class="beerCardABV">ABV: {{ beer['abv'] }}</p>
    </div>
</template>
<style lang="scss">
    .card {
		margin: 0 auto;
		margin-bottom: 5em;
		width: 15em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: black;
		padding: 0.5em;
		text-align: center;
		// border: 1px solid rgba(163, 153, 163, 0.3);
		// -webkit-box-shadow: 0px 6px 6px 0px rgba(163, 153, 163, 1);
		// -moz-box-shadow: 0px 6px 6px 0px rgba(163, 153, 163, 1);
		// box-shadow: 0px 6px 6px 0px rgba(163, 153, 163, 1);
	
        .beerCardImg {
			border-radius: 50%;
			width: 50%;
			height: 70%;
			position: relative;
			bottom: 65px;
		}

		.beerCardName {
			position: relative;
			bottom: 50px;
			font-size: 1em;
		}

		.beerCardABV {
			position: relative;
			bottom: 45px;
			font-size: 0.8em;
			color: grey;
		}
	}
</style>