import React, { Component } from 'react'
import './footer.css'

export default function Footer() {
  return (
      <div>

<footer id="footer">
    <div className="social_media">
      <ul>
        <li>
          <a
            href="https://www.facebook.com/" rel="noopener"
          >
            <i className="fab fa-facebook-square fa-2x facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com" rel="noopener"
          >
            <i className="fab fa-linkedin fa-2x linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/" rel="noopener"
          >
            <i className="fab fa-github-square fa-2x github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com" rel="noopener"
          >
            <i className="fab fa-youtube fa-2x youtube"></i>
          </a>
        </li>
      </ul>
    </div>
    <div className="last_services">
      <p>Full-Stack development</p>
    </div>
    <div className="rights"><p> React Group 4 &copy; 2021</p></div>
  </footer>
        
        
      </div>
  )
}
