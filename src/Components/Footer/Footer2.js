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
                <NavLink className="directLink" to="/aboutus">
                Our store is more than just another average ondivne retailer. We sell not only top quality products, but give our customers a positive online shopping experience.
                </NavLink></div>
            </div>
            <ul className="Footer secondCol"><br/>
            INFORMATION
            <li className="Footer Items">
            <NavLink className="directLink" to="/aboutus">About Us</NavLink>
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
            <NavLink className="directLink" to="/store">Medicine</NavLink>
            </li> 
            <li className="Footer Items">
            <NavLink className="directLink" to="/store">Supplements</NavLink>
            </li>
            </ul>
            </div>
                <div className="Footer icons">
                    <span>
                    <a className="footerAnchor" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/color/40/000000/facebook-new.png" alt="Facebook account"/></a>
                    <a className="footerAnchor" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/color/40/000000/linkedin-circled--v1.png" alt="Linked account"/></a>
                    <a className="footerAnchor" href="https://github.com/ReactG5Oca/drugStore" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/ios-filled/37/4a90e2/github.png" alt="Github account"/></a>
                </span>
                <span className="copyright">&copy; Copyrights</span>
                </div>
            </div>
        )
    }
}

export default Footer
