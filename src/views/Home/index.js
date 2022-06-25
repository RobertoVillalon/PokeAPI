import { useEffect } from "react";
import Loading from "../../components/Loading";
//import PokemonContext from "../../context/pokemons"
import PokemonList from "../Home/components/PokemonList"
import ErrorMessage from "../../components/ErrorMessage"
import usePokemonsStore from "../../zustand/stores/pokemons"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(){
    const {getPokemons, pokemons, isLoading, errorMessage, hasError} = usePokemonsStore(state => ({getPokemons: state.getPokemons, pokemons: state.pokemons,
        isLoading: state.isLoading, errorMessage: state.errorMessage,hasError: state.hasError}));
    //const {getPokemons, pokemons, isLoading, errorMessage, hasError} = useContext(PokemonContext);

    useEffect(() => {
        getPokemons().catch(null);
    },[])

    if(isLoading){
        return(
            <Loading title="Cargando Informacion sobre los pokemones" />
        );
    }

    return(
        <div>
            {hasError ? <ErrorMessage message={errorMessage} /> : <PokemonList pokemons = {pokemons} />}
        </div>
    );
}