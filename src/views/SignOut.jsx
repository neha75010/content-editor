import { useContext, useEffect, useState } from "react"
import { AppContext } from "../providers/AppProvider";

export default function SignOut () {
	const { axios, reloadCookies } = useContext(AppContext);

	useEffect(() => {
		axios.emit('user/signout', {} , r => {
			reloadCookies(r);
			console.log(r);
		});
	}, []);

	return <>ok</>;
}