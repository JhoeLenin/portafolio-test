import React from "react"

import { Link } from "react-router-dom"

class Header extends React.Component {
  render() {
      return (
          <header className="s-header layout">
              <div className="row s-header__nav-wrap">
                  <nav className="s-header__nav">
                      <ul>
                          <li id="home"><Link className="smoothscroll" to="/">Home</Link></li>
                          <li id="about"><Link className="smoothscroll" to="/about">About</Link></li>
                          <li id="portfolio"><Link className="smoothscroll" to="/portfolio">Portfolio</Link></li>
                          <li id="contact" className="current"><Link className="smoothscroll" to="/contact">Contact</Link></li>
                      </ul>
                  </nav>
              </div>
          </header>
      )
  }
}

class Contactus extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Header />
        <section id="contact" className="s-contact target-section">
          <div className="row s-contact__header">
            <div className="column large-12">
              <h3 className="section-header-allcaps">Say Hello</h3>
            </div>
          </div>
          <div className="row s-contact__content">
            <div className="column large-7 medium-12">
              <h4 className="huge-text">
              Have a new project in mind? Let's collaborate and build something awesome. 
              Let's turn that idea to an even greater product :)
              </h4>
            </div>
              <div className="column large-4 medium-12">
                <div className="row contact-infos">
                  <div className="column large-12 medium-6 tab-12">
                    <div className="contact-block">
                      <h5 className="contact-block__header">
                        Email
                      </h5>
                      <p className="contact-block__content">
                        <a className="mailtoui" href="daniel.b100726@gmail.com">daniel.b100726@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="column large-12 medium-6 tab-12">
                    <div className="contact-block">
                      <h5 className="contact-block__header">
                        Phone
                      </h5>
                      <p className="contact-block__content">
                        <a href="tel:+1975432345">+58 0424-950-1974</a>
                      </p>
                      <h5 className="contact-block__header">
                        Github
                      </h5>
                      <p className="contact-block__content">
                        <a href="https://github.com/dbriceno10" target="__blank">dbriceno10</a>
                      </p>
                      <h5 className="contact-block__header">
                        Linkedin
                      </h5>
                      <p className="contact-block__content">
                        <a href="https://www.linkedin.com/in/daniel-alejandro-687539137/" target="__blank">Daniel Alejandro Briceño Salazar</a>
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Contactus