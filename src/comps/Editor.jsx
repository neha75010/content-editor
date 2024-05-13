import { useContext } from "react";
import { AppContext } from "../providers/AppProvider";
import { useEffect } from "react";
import Panel from "./Panel";
import RmvElement from "./RmvElement";
import SwpElement from "./SwpElement";
import styled from "styled-components";
import EditorChangeType from "./EditorChangeType";
import EditorTitle from "./EditorTitle";
import EditorForm from "./EditorForm";
import EditorEmpty from "./EditorEmpty";

export default function Editor({ ...props }) {
	const { selected, select, useDoc : { document, elements, updElement } } = useContext(AppContext);
	const form = elements?.[document[selected]?.type]?.editor;

	return selected ?
	<Panel>
		<EditorChangeType />
		<EditorTitle />
		<EditorForm />
	</Panel> :
	<EditorEmpty />
}