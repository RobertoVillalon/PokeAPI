import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(){
    const {pathname} = useLocation();

    //Setea la pagina al inicio de la lista al momentos de volver
    useEffect(() => {
        window.scrollTo(0,0);
    },[pathname]);

    return null;
}