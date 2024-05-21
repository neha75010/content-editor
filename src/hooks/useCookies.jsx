import { useContext, useEffect, useState } from "react";
import { APIContext } from "../providers/APIProvider";

export default function useCookies () {
	const { axios, socket } = useContext(APIContext);
	const [ cookies, setCookies ] = useState({});
	const [ loadedCookies, setLoadedCookies ] = useState(false);

	const reloadCookies = () => {
		axios.emit('cookies/read', {}, setCookies);
		setLoadedCookies(true);
	};
	const writeCookie = (key, data) => socket.emit('cookies:write', key, data, setCookies);
	useEffect(() => {
		socket.on('connect', () => reloadCookies());
	}, []);

	useEffect(() => {/*console.log(cookies)*/}, [cookies]);

	return { cookies, reloadCookies, writeCookie, loadedCookies };
}