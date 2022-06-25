import { Spinner } from "react-bootstrap";

export default function Loading({title}){
    return(
        <>
            <Spinner animation="border" size="lg"></Spinner>
        </>
    );
}