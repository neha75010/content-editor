import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../providers/AppProvider";
import { decodeToken } from "react-jwt";
import Body from "../comps/Body";
import Panel from "../comps/Panel";
import styled from "styled-components";
import Box from "../comps/Box";

export default function Menu () {
	const [docs, setDocs] = useState([]);
	const [search, setSearch] = useState("");
	const navigate = useNavigate();
	const { socket, cookies : { token }, loadedCookies, users } = useContext(AppContext);
	
	useEffect(() => {
		if (search === "") socket.emit('documents:get', decodeToken(token).id, setDocs);
		else socket.emit('documents:search', decodeToken(token).id, search, setDocs);
	}, [search]);

	const createDocument = function () {
		socket.emit('document:create', decodeToken(token).id, search, idDoc => navigate('/docs/'+idDoc));
	}

	return <Body>
		<Box>
			<div className="head">
				<input type="text" onInput={e => setSearch(e.target.value)} value={search} />
				<button onClick={createDocument}>+ Nouveau document</button>
				<Link to={"/signout"}>Signout</Link>
			</div>
			<div className="body">
				{docs.map(({ _id, title = "Sans titre", founder, date = "01-01-1970T00:00:00.000+00:00" }, i) => {
					return <Link key={i} to={`/docs/${_id}`}>
						<div>
							<b>{title}</b>
							<small>id: {_id}</small>
						</div>
						<small>Author: {users.find(user => user._id === founder)?.username}</small>
						<small>Date: {new Date(date).toLocaleString()}</small>
					</Link>
				})}
			</div>
		</Box>
	</Body>
}