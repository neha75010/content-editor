import React, { createContext } from 'react';
export const APIContext = createContext(null);
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io(`http://${window.location.hostname}`, {
	withCredentials: true
});

const instance = axios.create({
	baseURL: `http://${window.location.hostname}/api`,
	withCredentials: true,
	method: 'POST',
});

function emit(channel, data, callback) {
    instance({ url: '/'+channel, data }).then(({data}) => {
        callback(data)
    });
}

export default function APIProvider ({ children }) {
	return <APIContext.Provider value={{ socket, axios : { emit } }}>
		{children}
	</APIContext.Provider>
}