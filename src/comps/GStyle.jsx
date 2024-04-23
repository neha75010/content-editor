import { createGlobalStyle } from 'styled-components'

const palette = {
    light : "#8ccaff",
    dark: "#332e2e",
    white: 'rgba(255, 255, 255, 1)',
    black: 'rgba(0, 0, 0, 1)',
}

export const GStyle = createGlobalStyle`
    * {
        font-family: Raleway;
        box-sizing: border-box;
        outline: none;
    }

    html, body, #root {
        overflow: hidden;
        height: 100%;
        margin: 0;
        ${({ $dark = true }) => !$dark ? `--primary: ${palette.dark}; --background: ${palette.light};` : `--primary: ${palette.light}; --background: ${palette.dark};`};
        --text: ${palette.white};
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;