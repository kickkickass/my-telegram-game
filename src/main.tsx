import React from 'react'
import ReactDOM from 'react-dom/client'
import { WebApp } from "@twa-dev/sdk";  // ✅ Добавили импорт
import App from './App.tsx'
import './index.css'

WebApp.ready();  // ✅ Добавили инициализацию WebApp

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
