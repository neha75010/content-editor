import { createContext, useContext } from "react";
import useDocument from "../hooks/useDocument";
import { useState } from "react";
import { useEffect } from "react";
import useCookies from "../hooks/useCookies";
import { APIContext } from "./APIProvider";
import { useParams } from "react-router-dom";
export const AppContext = createContext(null);

export default function AppProvider ({ children }) {
	const [idDoc, setIdDoc] = useState(null);
	const [users, setUsers] = useState(null);
	const useDoc = useDocument(idDoc);
	const [selected, select] = useState(null);
	const [scrollEnd, setScrollEnd] = useState(null);
	const { cookies, reloadCookies, writeCookie, loadedCookies } = useCookies();
	const { socket, axios } = useContext(APIContext);

	useEffect(() => {
		console.log(idDoc);
	}, [idDoc]);

	useEffect(() => {
		socket.emit('users:get', setUsers);
	}, []);

	return <AppContext.Provider value={{ useDoc, selected, select, scrollEnd, setScrollEnd, cookies, reloadCookies, writeCookie, loadedCookies, socket, axios, idDoc, setIdDoc, users }}>
		{children}
	</AppContext.Provider>
}