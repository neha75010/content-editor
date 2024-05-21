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
        --light: ${palette.light};
        --dark: ${palette.dark};
        --white: ${palette.white};
        --black: ${palette.black};
    }

    html, body, #root {
        overflow: hidden;
        height: 100%;
        margin: 0;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #232323;
        padding: 2rem;
    }

    * {
        --sb-track-color: #ffff;
        --sb-thumb-color: var(--light);
        --sb-size: 12px;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: var(--sb-size);
        height: var(--sb-size);
        position: absolute;
    }

    ::-webkit-scrollbar-track {
        background: var(--sb-track-color);
        border-radius: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--sb-thumb-color);
        border: 3px solid var(--sb-track-color);
        border-radius: 12px;
    }

    @supports not selector(::-webkit-scrollbar) {
        * {
            scrollbar-color: var(--sb-thumb-color)
                            var(--sb-track-color);
        }
    }
`;