import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AppProvider from './providers/AppProvider';
import { BrowserRouter } from 'react-router-dom';
import SocketProvider from './providers/APIProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SocketProvider>
            <AppProvider>
                <BrowserRouter children={<App />} />
            </AppProvider>
        </SocketProvider>
    </React.StrictMode>,
)
