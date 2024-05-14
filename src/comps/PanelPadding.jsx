import styled from "styled-components";

const Padding = styled.div`padding: ${({$full}) => $full ? "0" : '1rem 0'}; width: ${({$full}) => $full ? "100%" : '56%'}; height: 100%; display: flex; overflow: hidden; position: relative;`;
export default Padding