import { useContext } from "react";
import { AppContext } from "../providers/AppProvider";
import Label from "./EditorFormLabel";

export default function RmvElement ({ index, onClick }) {
	const { useDoc : { rmvElement } } = useContext(AppContext);

	return <Label>
		<button onClick={e => {
			rmvElement(index);
			onClick(e);
		}}>Supprimer</button>
	</Label>
}