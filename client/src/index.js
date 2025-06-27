import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './components/Navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import HomePage from './components/Home';
import SignUpPage from './components/SignUp';
import LoginPage from './components/Login';
import CreateRecipePage from './components/CreateRecipe';

const App = () => (
    <Router>
        <div>
            <NavBar />
            <Routes>
                <Route path="/create_recipe" element={<CreateRecipePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    </Router>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);