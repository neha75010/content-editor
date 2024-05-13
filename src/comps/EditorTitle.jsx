import { useContext } from "react";
import Title from "./Title";
import { AppContext } from "../providers/AppProvider";

export default function EditorTitle() {
	const { selected, useDoc : { document, elements } } = useContext(AppContext);

	return <Title>{elements?.[document[selected]?.type]?.title}</Title>
}