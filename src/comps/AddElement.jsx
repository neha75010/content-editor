import { useContext } from "react";
import { AppContext } from "../providers/AppProvider";

export default function AddElement ({ type, ...props }) {
	const { useDoc : { addElement, elements : { [type] : { title, Icon } } }, select, setScrollEnd } = useContext(AppContext);

	return <button onClick={() => {
		const id = addElement(type, props);
		select(id.toString());
		setScrollEnd(true);
	}}>
		<Icon size={32} />
		{title}
	</button>
}