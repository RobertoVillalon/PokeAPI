import pokemonContext from ".";
import { useState } from "react";
import apiCall from "../../api";

export default function PokemonProvider({children}){
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const getPokemons = async () => {
        try{
            setIsLoading(true);
            setErrorMessage("");
            setHasError(false)
            const pokemonResults = await apiCall({url:"https://pokeapi.co/api/v2/pokemon?limit=151"});
            setPokemons(pokemonResults.results);
        }catch(error){
            setErrorMessage("Algo ha ocurrido");
            setHasError(true)
            setPokemons([])
        }       
        finally{
            setIsLoading(false);
        };
    };

    const getPokemonDetails = async (id) => {
    
        if(!id) Promise.reject("El id no fue encontrado");

        try{
            setIsLoading(true)
            setErrorMessage("");
            setHasError(false)
            const pokemonDetail = await apiCall({url:`https://pokeapi.co/api/v2/pokemon/${id}`});
            setPokemonDetail(pokemonDetail);
        }catch(error){
            setErrorMessage("Algo ha ocurrido");
            setHasError(true)
            setPokemonDetail({})
        }
        finally{
            setIsLoading(false);
        }
    };

    return(
        <pokemonContext.Provider value = {{getPokemons,pokemons,getPokemonDetails,pokemonDetail, isLoading, errorMessage, hasError}}>
            {children}
        </pokemonContext.Provider>
    );
}