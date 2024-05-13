import { useContext } from "react";
import { AppContext } from "../providers/AppProvider";

export default function RmvElement ({ index, onClick }) {
	const { useDoc : { rmvElement } } = useContext(AppContext);

	return <button onClick={e => {
		rmvElement(index);
		onClick(e);
	}}>Supprimer</button>
}