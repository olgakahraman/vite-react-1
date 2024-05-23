import React from "react"
import "./Main.css"

export default function Main(){
    return (
      <div className="main-content">
        <h1>Fun facts about React</h1>
        <ul className="list-items">
          <li>
            <span className="list-text">Was first released in 2013</span>
          </li>
          <li>
            <span className="list-text">
              Was originally created by Jordan Walke
            </span>
          </li>
          <li>
            <span className="list-text">
              Has well over 100K stars on GitHub
            </span>
          </li>
          <li>
            <span className="list-text">Is maintained by Facebook</span>
          </li>
          <li>
            <span className="list-text">
              Powers thousands of enterprise apps, including mobile apps
            </span>
          </li>
        </ul>
      </div>
    );
}