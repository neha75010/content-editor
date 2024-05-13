import { useContext } from "react";
import Label from "./Label";
import { AppContext } from "../providers/AppProvider";

export default function EditorChangeType() {
	const { selected, select, useDoc : { document, elements, updElement } } = useContext(AppContext);
	return (
		<Label>
			<select onChange={event => updElement(selected, "type", event.target.value !== "" ? event.target.value : undefined)} value={document[selected]?.type}>
				{Object.entries(elements).map(([i, { title }]) => <option key={i} value={i}>{title}</option>)}
			</select>
		</Label>
	);
}