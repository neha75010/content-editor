import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../providers/AppProvider";
import RmvElement from "./ElementRmv";
import SwpElement from "./ElementSwp";
import Panel from "./Panel";
import styled from "styled-components";
import Markdown from 'react-markdown';
import { usePDF, Resolution, Margin } from 'react-to-pdf';
import DocumentDropdown from "./DocumentDropdown";
import DocumentRender from "./DocumentRender";

export default function Document () {
	const { select, useDoc : { clrDocument }, scrollEnd, setScrollEnd } = useContext(AppContext);
	const { toPDF, targetRef } = usePDF({filename: 'page.pdf', page: { margin: Margin.LARGE }});
	const scrollRef = useRef();

	useEffect(() => {
		//console.log(targetRef.current.parentElement);
		const scr = targetRef.current.parentElement;
		if(scrollEnd) scr.scrollTo(0,scr.scrollHeight)
		setScrollEnd(false);
	}, [scrollRef, scrollEnd]);

	return <Panel $full={true} onClick={(event) => {
		event.preventDefault();
		if(event.target === event.currentTarget) select(null)
	}}>
		<DocumentDropdown items={[
			{ title: "Télécharger", onClick: () => {
				select(null);
				toPDF();
			} },
			{ title: "Vider", onClick: () => {
				clrDocument();
			} },
		]} />
		<DocumentRender targetRef={targetRef} />
	</Panel>
}