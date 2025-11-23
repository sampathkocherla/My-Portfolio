import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext.jsx'
import './styles/index.css'
import App from './App.jsx'
// import { Analytics } from "@vercel/analytics/react"
import {StrictMode} from "react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <App />
            {/*<Analytics />*/}
        </ThemeProvider>
    </StrictMode>
)