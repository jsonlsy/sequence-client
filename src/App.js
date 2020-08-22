import React, { useEffect } from 'react';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8081";

function App() {
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        return () => socket.disconnect();
    });

    return (
        <h3>Sequence Client</h3>
    );
}

export default App;