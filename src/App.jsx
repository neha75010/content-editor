import styled from 'styled-components'
import { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import './fonts/Raleway/.css';

import { GStyle } from './comps/GStyle';
import { Editor } from './comps/Editor';
import quill from './config/quill';
import { request } from './functions/request';

function App() {
    const [value, setValue] = useState(undefined);

    useEffect(() => {
        if (value === undefined) request({ method : "get", url : "/open/6627e6237d971642825efdfb", callback : setValue });
        const data = new FormData();
        data.append("doc", value);
        if (value !== undefined) request({ method : "post", url : "/save/6627e6237d971642825efdfb", data });
    }, [value])

    return <>
        <GStyle $dark={true} />
        <Body>
            <Panel>
                <Nav>
                    <Item $primary={true}>Jambon</Item>
                    <Item>Jambon</Item>
                    <Item>Jambon</Item>
                </Nav>
                <SettingsContainer>
                    <Settings>
                        Reglages
                    </Settings>
                </SettingsContainer>
            </Panel>
            <Box>
                <Editor {...quill} value={value} onChange={setValue} />
            </Box>
        </Body>
    </>;
}

const Body = styled.div` width: 100%; height: 100%; display: flex; padding: 2em; background-color: var(--background); gap: 1em; font-size: 0.8em;`;
const Nav = styled.div` width: 100%; height: 100%; display: flex; flex-direction: column; overflow-y: auto;`;
const Panel = styled.div` width: 20%; height: 100%; display: flex; flex-direction: column; gap: 0.5em; color: var(--text); `;
const SettingsContainer = styled.div` width: 100%; display: flex; padding-right: 1em;`;
const Settings = styled.div` width: 100%; display: flex; background-color: #1112; padding: 1em; border-radius: 0.5em;`;
const Item = styled.div` width: 100%; padding: 0.5em; color: var(--primary); border-radius: 0.5em; ${({ $primary }) => $primary && `background-color: var(--primary); color: var(--background);`}`;
const Box = styled.div` width: 100%; height: 100%; background-color: white; border-radius: 1em; box-shadow: 0 0 1em #0008;`;

export default App
