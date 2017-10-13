import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from '../home'

const HomeRouter = () => {
  return (
    <div>
        <BrowserRouter>
          <Route path="/" component={ Home }/>
        </BrowserRouter>
    </div>
  )
}

export default HomeRouter
