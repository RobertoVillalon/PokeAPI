import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
//import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage"
import usePokemonsStore from "../../zustand/stores/pokemons";
import { Card, Accordion} from "react-bootstrap";
import useCapitalizeFirstLetter from "./../../components/hooks/useCapitalizeFirstLetter"
import "./style.css"

export default function PokemonDetail(){
    const { id } = useParams();
    //const { getPokemonDetails, pokemonDetail, isLoading, errorMessage, hasError} = useContext(PokemonContext)
    const {getPokemonDetails, pokemonDetail,isLoading, errorMessage, hasError} = usePokemonsStore(state => ({getPokemonDetails: state.getPokemonDetails,
    pokemonDetail: state.pokemonDetail,isLoading: state.isLoading, errorMessage: state.errorMessage,hasError: state.hasError}));

    
    /**Cada vez que se carge un pokemon se debe obtener su informacion */
    useEffect(() => {
        getPokemonDetails(id).catch();
    },[])


    if(isLoading){
        return(
                <Loading />
        );
    }else{
 
        return (
            <div>
            {hasError ? <ErrorMessage message= {errorMessage}/> : (
                <div key={`Pokemon Card ${pokemonDetail.name}`}>
                    <Card style={{ width: '18rem' }} id="cartasPokedex">
                        {<Card.Img src={`${pokemonDetail.sprites?.other.dream_world.front_default}`} alt={`${pokemonDetail.name}`} />}
                        <Card.Body>
                            <Card.Title>{pokemonDetail.name}</Card.Title>
                            <Card.Text>
                                <Accordion >
                                    <Accordion.Header>Caracteristicas Principales</Accordion.Header>
                                    <Accordion.Body>
                                        <p>{`Altura: ${pokemonDetail.height}`}</p>
                                        <p>{`Peso: ${pokemonDetail.weight}`}</p>
                                    </Accordion.Body>
                                </Accordion>
                            <PokeStats stats={pokemonDetail?.stats ?? []} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )}

            </div>
        );
    }


}