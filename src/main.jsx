import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContactsProvider } from './context/ContactsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactsProvider>
      <App />
    </ContactsProvider>
  </StrictMode>,
)
