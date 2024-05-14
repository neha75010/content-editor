import { useContext } from "react";
import { AppContext } from "../providers/AppProvider";

export default function SwpElement ({ index, onChange }) {
	const { useDoc : { document, swpElement } } = useContext(AppContext);

	return <input type="number" value={index} min={0} max={Object.keys(document).length-1} onChange={e => {
		swpElement(index, e.target.value);
		onChange(e);
	}} />
}