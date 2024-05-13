import styled from "styled-components";

const Label = styled.label`display: flex; flex-direction: column; gap: 0.125rem; &>button{ background: blue; color: white; } &>input, &>textarea, &>select, &>button{ padding: 0.5rem; border-radius: 0.5rem; border: 0; &:hover { box-shadow: inset 999em 0 0 0 rgba(0, 0, 0, 0.1); } }`;

export default Label;