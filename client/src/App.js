import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Routes,
    Route,
} from "react-router-dom";
import Landing from './routes/landing';
import Transfer from './routes/transer';
import Login from './routes/Login';
import useAuthTokens from './hooks/useAuthTokens'

const App = props => {
    const tokens = useAuthTokens();
    return (
        <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path="/app" element={<Transfer tokens={tokens} />} />
        </Routes>
    )
};

export default App;