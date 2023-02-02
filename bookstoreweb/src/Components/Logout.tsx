import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function Logout() {
    const [cookies, setCookie,removeCookie] = useCookies(["token"]);
    let navigate = useNavigate()

    useEffect(() => {
        removeCookie("token",{path:'/'});
        


// Simulate an HTTP redirect:
        window.location.replace(`${process.env.REACT_APP_PORTAL}`);
    });
    return (<></>);
}

