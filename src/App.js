import React from "react"
import './main.css'
import SideNav from "./components/layout/SideNav"
import TopBar from "./components/layout/TopBar"
import Body from "./components/layout/Body"

const App = () => {
  return (
    <div className="ml-5">
        <TopBar/>
        <div className="flex">
            <SideNav/>
            <Body/>
        </div>
    </div>
  )
}

export default App