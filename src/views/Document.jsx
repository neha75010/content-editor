import styled from "styled-components";
import Comps from "../comps/Components";
import Doc from "../comps/Document";
import Editor from "../comps/Editor";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../providers/AppProvider";
import Body from "../comps/Body";

export default function Document () {
	const { id } = useParams();
	const { setIdDoc } = useContext(AppContext);
	useEffect(() => {
		setIdDoc(id);
	}, [id]);

	return <Body>
		<section style={{ justifyContent : "flex-start" }}>
			<Link to={'/'}>Retour</Link>
		</section>
		<section style={{ height: "100%" }}>
			<Comps />
			<Doc />
			<Editor />
		</section>
	</Body>
}