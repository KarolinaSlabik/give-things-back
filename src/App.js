import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import { Home } from './components/home/Home';
import { LogIn } from './components/logIn/LogIn';
import { SignUp } from './components/signUp/SignUp';

const App = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='logowanie' element={<LogIn />} />
                <Route path='rejestracja' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    </>
};

export default App
