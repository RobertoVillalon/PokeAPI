import PokemonListItem from "./PokemonListItem.js";

export default function PokemonList({pokemons}){
    return(
        <>
            {
                pokemons?.map((pokemon, index) => <PokemonListItem key= {index} {...pokemon} />)
            }
        </>
  
    );
}