<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	beer: Object,
});
</script>
<template>
	<div class="card">
		<img class="beerCardImg" :src="beer['image_url']" alt="">
		<div class="infoCard">
			<p class="beerCardName">{{ beer['name'] }}</p>
			<p class="beerCardABV">ABV: {{ beer['abv'] }}</p>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.card {
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 52vh;
	width: 20vw;
	margin-bottom: 5vh;

	&:hover {
		// height: 54vh;
		// width: 22vw;
		background-color: rgb(250, 250, 250);
		border-color: rgb(248, 248, 248);
		border: 5px;
		-webkit-box-shadow: 6px 0px 6px 6px rgb(226, 219, 226);
		-moz-box-shadow: 6px 6px 6px 6px rgb(226, 219, 226);
		box-shadow: 0px 0px 6px 6px rgba(226, 219, 226, 1);
		.infoCard{
			background-color: rgb(180, 179, 179);
		}
	}

	.beerCardImg {
		height: 40vh;
		margin-top: 2vh;
		margin-bottom: 2vh;
	}

	.infoCard {
		background-color: rgb(228, 225, 225);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;

		.beerCardName {
			font-weight: bolder;
		}

		// .beerCardABV {

		// }
	}
}
</style>