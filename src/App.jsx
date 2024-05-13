import { useState } from 'react'
import Document from './comps/Document'
import AddElement from './comps/AddElement'
import { GStyle } from './comps/GStyle'
import Editor from './comps/Editor'
import Components from './comps/Components'
import './fonts/Raleway/.css';

function App() {
    return (
        <>
            <GStyle />
            <Components />
            <Document />
            <Editor />
        </>
    )
}

export default App
