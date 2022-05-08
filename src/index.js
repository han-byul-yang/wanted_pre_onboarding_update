import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Routes from './routes'
import reportWebVitals from './reportWebVitals'
import Tab from './components/Tab/Tab'
import Toggle from './components/Toggle/Toggle'
import Dropdown from './components/Dropdown/Dropdown'
import Input from './components/Input/Input'
import Slider from './components/Slider/Slider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Tab />
    <br />
    <Toggle />
    <br />
    <Dropdown />
    <br />
    <Input />
    <br />
    <Slider />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
