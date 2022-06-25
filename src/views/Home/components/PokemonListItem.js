import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"
import useCapitalizeFirstLetter from "../../../components/hooks/useCapitalizeFirstLetter"

export default function PokemonListItem({ name, url }) {
    const getID = () => url.split("/")[6];
    name = useCapitalizeFirstLetter(name);
    
    return (
    <> 
        <p>{name}</p>
        <Link to={`/pokemon/${getID()}`}>
            <Button variant="outline-primary">Ver Detalles</Button>
        </Link>
    </>
 );
}