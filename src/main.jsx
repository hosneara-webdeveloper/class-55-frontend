import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css';
import './index.css'
import Context from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* 4 number : ekhane context jei component ta create kora hoiche sheta k <App /> er parent kore dite hobe (context er name jeta shetak call kora jabena, context component k direct call korte hobe) */}
    <Context> {/* eta context component jeta App er parent kore deya hoiche */}
      <App />
    </Context>
  </React.StrictMode>,
)
// 5 number kaj context component er vitore