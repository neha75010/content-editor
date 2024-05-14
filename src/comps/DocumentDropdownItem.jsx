import styled from "styled-components";

const Item = styled.div`padding: 0.75em 1.5em; cursor: pointer; font-size: 11px; &:hover{ background-color: #00000006; } &:first-child{ border-radius: 0.5em 0.5em 0 0; } &:last-child{ border-radius: 0 0 0.5em 0.5em; } &:not(:last-child){ border-bottom: 1px solid #0002; }`;
export default Item;