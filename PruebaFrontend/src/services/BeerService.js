import { ref } from "vue";
import axios from "axios";

class BeerService{
    beers;
    url="https://api.punkapi.com/v2/beers?per_page=20";

    constructor(){
        this.beers = ref([]);
    }

    getBeers(){
        return this.beers.value;
    }

    async fetchAllBeers(){
        try{
            await axios.get(this.url).then((response) =>{
                this.beers.value = response.data;
            });
        } catch (err) {}
    }
}

export default BeerService;