import { useContext, useEffect, useState } from "react";
import elements from "../config/elements";
import { useParams } from "react-router-dom";
import { APIContext } from "../providers/APIProvider";

export default function useDocument(id) {
	const { socket } = useContext(APIContext);
	const [document, setDocument] = useState(JSON.parse(localStorage.getItem("document")) ?? {});
	const addElement = (type, props) => { const id = Object.values(document).length; setDocument({...document, [id] : {type, ...props}}); return id; }
	const rmvElement = (index) => setDocument(Object.fromEntries(Object.entries(document).filter(([i, el]) => i !== index).map(([i, el], idx) => [idx, el])));
	const swpElement = (a, b) => setDocument({ ...document, [b]: document[a], [a]: document[b] })
	const updElement = (index, field, value) => setDocument({ ...document, [index] : { ...document[index], [field] : value } });
	const clrDocument = () => setDocument({});

	useEffect(() => {
		if(id && Object.values(document).length > 0) socket.emit('document:set', id, document);
	}, [document])

	useEffect(() => {
		if(id) socket.emit('document:get', id, setDocument);
	}, [id]);

	return {document, addElement, rmvElement, swpElement, updElement, clrDocument, elements};
}