import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from "./context/user.context";
import { CategoriesProvider } from './context/categories.context';
import {CartProvider} from './context/cart-context.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserProvider>
            <CategoriesProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </CategoriesProvider>
        </UserProvider>
    </BrowserRouter>
    
);


reportWebVitals();
 