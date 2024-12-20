import { Container } from "./styles";
import externalLink from "../../assets/external-link-svgrepo-com.svg";
import geeksforgeeks from "../../assets/icons8-geeksforgeeks.svg";
import deutschebank from "../../assets/deutsche-bank-1.svg";
import juspay from "../../assets/JuspayLogo.svg";
import dws from "../../assets/DWS.F_BIG (1).svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div className="experiences">
        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <header className="experience-header">
              <div className="company-logo">
                <img className="logo-img" src={dws} alt="DWS Group Logo" />
              </div>
              <div className="experience-links">
                <h5 className="company-span">July 2024 - Present</h5>
                <a href="https://www.db.com" target="_blank" rel="noreferrer">
                  <img
                    className="company-img"
                    src={externalLink}
                    alt="Visit site"
                  />
                </a>
              </div>
            </header>
            <hr />
            <div className="body">
              <h3 className="company-role">Software Engineer</h3>
              <ul className="company-data">
                <li>
                  &bull; Currently working on creating a monitoring dashboard
                  for cornerstone, which will help BA’s in taking quick actions
                </li>
                <li>
                  &bull; Also working on PCF (Portfolio Composition File) where
                  we are creating our in-house PCF file for the Passive Market
                </li>
                <li>
                  &bull; For the UI side, I'm working on technology like React
                  and Redux, and for the backend, I'm working on Java SpringBoot
                  to make scalable MicroServices
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>SpringBoot</li>
                <li>MicroService</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <header>
              <div className="company-logo">
                <img src={juspay} alt="Visit site" />
                <h3 className="company-name">Juspay</h3>
              </div>
              <div className="experience-links">
                <h5 className="company-span">March 2024 - July 2024</h5>
                <a
                  href="https://www.juspay.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="comapny-img"
                    src={externalLink}
                    alt="Visit site"
                  />
                </a>
              </div>
            </header>
            <hr></hr>
            <div className="body">
              <h3 className="company-role">SDE Intern</h3>
              <ul className="company-data">
                <li>
                  &bull; Working with the Instant Refund team (Morpheus) to
                  enhance existing APIs and provide faster and more responsive
                  refund solutions for Swiggy, Amazon India, and Zomato.
                </li>
                <li>
                  &bull; We are also working on server traffic scalability for
                  companies such as My11 Circle and MPL. (for pot distribution)
                </li>
                <li>
                  &bull; working on complete functional programing languages
                  like haskell and PureScript, to provide the most optimized and
                  robust APIs
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PureScript</li>
                <li>Haskell</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <header>
              <div className="company-logo">
                <img src={deutschebank} alt="Visit site" />
                <h3 className="company-name">Deutsche Bank</h3>
              </div>
              <div className="experience-links">
                <h5 className="company-span">May 2023 - July 2023</h5>
                <a href="https://www.db.com" target="_blank" rel="noreferrer">
                  <img
                    className="comapny-img"
                    src={externalLink}
                    alt="Visit site"
                  />
                </a>
              </div>
            </header>
            <hr></hr>
            <div className="body">
              <h3 className="company-role">
                Technology Development And Inovation Intern
              </h3>
              <ul className="company-data">
                <li>
                  &bull; To help with data enrichment, I created a toggle for
                  XPATH switching and service switching.
                </li>
                <li>
                  &bull; I have used cucumber for testing of my changes, where I
                  have created feature files and steps for data enrichment
                </li>
                <li>
                  &bull; Following that, I worked in PySpark to develop a
                  comparator that compares two data frames and produces a csv
                  file that displays the data differences.
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Spark</li>
                <li>Scala</li>
                <li>PySpark</li>
                <li className="Hide-1">HQL</li>
                <li className="Hide-2">Cucumber</li>
                <li className="Hide-3">OracleSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <header>
              <div className="company-logo">
                <img src={geeksforgeeks} alt="Visit site" />
                <h3 className="company-name">GeeksforGeeks</h3>
              </div>

              <div className="experience-links">
                <h5 className="company-span">July 2022 - Aug 2022</h5>
                <a
                  href="https://www.geeksforgeeks.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="comapny-img"
                    src={externalLink}
                    alt="Visit site"
                  />
                </a>
              </div>
            </header>
            <hr></hr>
            <div className="body">
              <h3 className="company-role">Member Of Technical Staff Intern</h3>
              <ul className="company-data">
                <li>
                  &bull; Coordinate and work with the Technical Content Team for
                  creating and reviewing quality content for geeksforgeeksg.
                </li>
                <li>
                  &bull; Review technical content like articles and
                  codes,Debugging DSA related code and Provide Code for unsolved
                  problems
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>C/C++</li>
                <li>Python</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
