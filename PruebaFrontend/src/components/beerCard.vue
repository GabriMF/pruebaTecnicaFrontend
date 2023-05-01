<script setup >
import { defineProps, ref } from 'vue';

const props = defineProps({
    beer: Object,
});

const dialog = ref(false);
</script>
<template>
    <v-dialog v-model="dialog" class="detailsCard">
        <template v-slot:activator="{ props }">
            <div class="card" v-bind="props">
                <img class="beerCardImg" :src="beer['image_url']" alt="">
                <div class="infoCard">
                    <p class="beerCardName">{{ beer['name'] }}</p>
                    <p class="beerCardABV">ABV: {{ beer['abv'] }}</p>
                </div>
            </div>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">{{ beer['name'] }}</span>
            </v-card-title>
            <v-card-text class="descriptionDetailsCard">
                <div class="beerPicDetailsCard">
                    <img class="beerPic" :src="beer['image_url']" alt="">
                </div>
                <div class="beerPropertiesDetailsCard">
                    <p class="sloganDetailsCard">{{ beer['tagline'] }}</p>
                    <p class="beerDescription">{{ beer['description'] }}</p>
                    <p><b>ABV:</b>  {{ beer['abv'] }}</p>
                    <p><b>IBU:</b>  {{ beer['ibu'] }}</p>
                    <p><b>EBC:</b>  {{ beer['ebc'] }}</p>
                    <p><b>SRM:</b> {{ beer['srm'] }}</p>
                    <p><b>Ph:</b> {{ beer['ph'] }}</p>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-btn color="green-darken-1" variant="text" @click="dialog = false">
                    Disagree
                </v-btn> -->
                <v-btn class="seeRecipeButton" variant="text" @click="dialog = false">
                    See Recipe!
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<style lang="scss" scoped>
.detailsCard {
    width: 50vw;

    .descriptionDetailsCard {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .beerPic {
            width: 8vw;
        }

        .beerPropertiesDetailsCard {
            display: flex;
            flex-direction: column;
            p{
                margin-bottom: 1vh;
            }
            .sloganDetailsCard{
                font-weight: bolder;
            }
            .beerDescription{
                font-weight: 400;
            }
        }
    }
	.seeRecipeButton{
		background-color: gray;
		color: white;
		&:hover{
			background-color: rgb(75, 75, 75);
		}
		&:active{
			background-color: rgb(39, 39, 39);
		}
	}
}

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

        .infoCard {
            background-color: rgb(180, 179, 179);
        }

        .beerCardImg {
            height: 42vh;
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