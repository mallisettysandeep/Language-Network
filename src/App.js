import {Routes,Route } from 'react-router-dom'
import LanguageLandingPage from './components/LanguageLandingPage'
import AboutUs from './components/AboutUsPage'
import './App.css'

const App = () => (
  
  <Routes>
    <Route exact path="/" component={LanguageLandingPage} />
    <Route path="/about" component={AboutUs} />
  </Routes>
)

export default App