import React from "react"

import "./index.css"

const MainPage = () => (
    <div className="mainPageEl">
      <div className="mainPageContentEl">
        <h1>Welcome</h1>
      </div>
      <div className="mainPageInfoEl">
        <a href="https://github.com/saymow" target="_blank" className="myInfoEl"><i className="fab fa-github"></i> Github</a>
        <a href="#" className="myInfoEl"><i className="fab fa-discord"></i> Discord</a>
        <a href="#" className="myInfoEl"><i className="fas fa-envelope"></i> Send a Email</a>
      </div>  
    </div>
)

export default MainPage