import { useEffect, useState } from "react";
import elements from "../config/elements";

export default function useDocument() {
	const [document, setDocument] = useState(JSON.parse(localStorage.getItem("document")) ?? {});
	const addElement = (type, props) => { const id = Object.values(document).length; setDocument({...document, [id] : {type, ...props}}); return id; }
	const rmvElement = (index) => setDocument(Object.fromEntries(Object.entries(document).filter(([i, el]) => i !== index).map(([i, el], idx) => [idx, el])));
	const swpElement = (a, b) => setDocument({ ...document, [b]: document[a], [a]: document[b] })
	const updElement = (index, field, value) => setDocument({ ...document, [index] : { ...document[index], [field] : value } });
	const clrDocument = () => setDocument({});

	useEffect(() => {
		const json = JSON.stringify(document, null, 4);
		localStorage.setItem("document", json);
	}, [document])

	return {document, addElement, rmvElement, swpElement, updElement, clrDocument, elements};
}