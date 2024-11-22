import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./context/store.js"

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
