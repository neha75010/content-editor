import { Routes, Route, Navigate } from "react-router-dom";
import routes from "../config/routes";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../providers/AppProvider";
import { decodeToken } from 'react-jwt'

export default function Router ({ children }) {
	const { cookies : { token }, loadedCookies } = useContext(AppContext);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		//console.log("ok : ", routes.map(route));
	}, [loadedCookies, routes, token]);

	useEffect(() => {
        //console.log(counter);
        const int = setInterval(() => {
            if(counter < 3) setCounter(counter + 1);
        }, 1000);
        return () => clearInterval(int);
    }, [counter])

	const isLogged = ({ logged = !!decodeToken(token)?.id }) => logged === !!decodeToken(token)?.id
	const route = ({ logged = !!decodeToken(token)?.id, path, element }, i) => {
		if (logged === !!decodeToken(token)?.id) return <Route key={i} path={path} element={element} />
	}

	return counter === 3 && <Routes>
		{!loadedCookies ? <Route path="*" element={<>ok</>} /> : routes.map(route)}
	</Routes>
}