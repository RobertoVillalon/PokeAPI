import {Accordion} from "react-bootstrap";

export default function PokeStats({stats}){
    return(
        <Accordion>
            <Accordion.Header>Estadisticas de Combate</Accordion.Header>
            <Accordion.Body>
                {stats?.map(({stat, base_stat}, index) => (
                    <div key={`Pokestats div ${index}`}>
                        <p>{`${stat.name}: ${base_stat}%`}</p>
                    </div>
                ))}
            </Accordion.Body>
        </Accordion>
    );
}