import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "./footer2.css"
export class Footer extends Component {
    render() {
        return (
            <div className="Footer cont">
            <div className="Footer footer">
            <div className="Footer firstCol">
                <div>
                </div>
                <div className="Footer about">ABOUT<br/>
                <NavLink className="directLink" to="/">
                Our store is more than just another average avenue retailer. We sell not only top quality products, but give our customers a positive online shopping experience.
                </NavLink></div>
            </div>
            <ul className="Footer secondCol"><br/>
            INFORMATION
            <li className="Footer Items">
            <NavLink className="directLink" to="/">About Us</NavLink>
            </li> 
            <li className="Footer Items">
            <a className="footerAnchor" href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">Customer Service</a>
            </li>
            <li className="Footer Items">
            <a className="footerAnchor" href="https://reactjs.org/tutorial/tutorial.html#what-are-we-building" target="_blank" rel="noreferrer">Privacy Policy  </a> 
            </li>
            <li className="Footer Items">
            <a className="footerAnchor" href="https://reactjs.org/tutorial/tutorial.html#before-we-start-the-tutorial" target="_blank" rel="noreferrer">Contact Us</a>
            </li>
            </ul>
            <ul className="Footer thirdCol"><br/>
            Shipping & Delivery
            <li className="Footer Items">
            <a className="footerAnchor" href="https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial" target="_blank" rel="noreferrer">Secure payment</a>
            </li> 
            <li className="Footer Items">
            <a className="footerAnchor" href="https://reactjs.org/tutorial/tutorial.html#help-im-stuck" target="_blank" rel="noreferrer">Guarantee</a>
            </li>
            <li className="Footer Items">
            <a className="footerAnchor" href="https://reactjs.org/" target="_blank" rel="noreferrer">Terms & Conditions</a>
            </li>
            </ul>
            <ul className="Footer forthCol"><br/>
            CATEGORIES
           
            <li className="Footer Items">
            <NavLink className="directLink" to="/shop">Mercedes</NavLink>
            </li>
            <li className="Footer Items">
            <NavLink className="directLink" to="/shop">Audi</NavLink>
            </li>
            <li className="Footer Items">
            <NavLink className="directLink" to="/shop">Toyota</NavLink>
            </li>
            <li className="Footer Items">
            <NavLink className="directLink" to="/shop">Mitsubishi</NavLink>
            </li>
            <li className="Footer Items">
            <NavLink className="directLink" to="/shop">Fiat</NavLink>
            </li>
            </ul>
            </div>
                <div >
                    <ul className="FooterIcons">
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
            </div>
        )
    }
}

export default Footer
