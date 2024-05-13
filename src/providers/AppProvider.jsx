import { createContext } from "react";
import useDocument from "../hooks/useDocument";
import { useState } from "react";
import { useEffect } from "react";
export const AppContext = createContext(null);

export default function AppProvider ({ children }) {
	const useDoc = useDocument();
	const [selected, select] = useState(null);
	const [scrollEnd, setScrollEnd] = useState(null);

	useEffect(() => {
		//console.log(selected);
	}, [selected]);

	return <AppContext.Provider value={{ useDoc, selected, select, scrollEnd, setScrollEnd }}>
		{children}
	</AppContext.Provider>
}