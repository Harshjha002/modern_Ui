import './App.css'
import './index.css'
import {Footer,Blog,Possibility,Features,WhatGPT4,Header} from './containers'
import {Navbar ,Brand,CTA} from './components'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT4/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App

