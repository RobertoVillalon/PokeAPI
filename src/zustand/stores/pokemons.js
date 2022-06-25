import create from "zustand";
import apiCall from "../../api";

const usePokemonsStore = create((set, get) => ({
    getPokemons: async () => {
        try{
            set({isLoading: true, errorMessage: "",hasError: false});
            const pokemonResults = await apiCall({url:"https://pokeapi.co/api/v2/pokemon?limit=151"});
            set({pokemons: pokemonResults.results});
        }catch(e){
            set({pokemons: [],errorMessage: "Algo ha pasado",hasError: true});
        }finally{
            set({isLoading: false});
        }
    },
    pokemons: [],
    getPokemonDetails: async (id) => {

        if(!id) return;

        try{
            set({isLoading: true, errorMessage: "",hasError: false});
            const pokemonDetail = await apiCall({url:`https://pokeapi.co/api/v2/pokemon/${id}`});
            set({pokemonDetail});
        }catch(e){
            set({hasError: true, errorMessage: "Algo ha pasado con la informacion del pokemon",pokemonDetail: {}});
        }finally{
            set({isLoading: false});
        }
    },
    pokemonDetail: {},
    isLoading: false,
    errorMessage: "",
    hasError: false,
}));

export default usePokemonsStore;