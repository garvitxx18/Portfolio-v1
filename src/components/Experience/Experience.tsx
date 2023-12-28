import { Container } from "./styles";
import externalLink from "../../assets/external-link-svgrepo-com.svg";
import geeksforgeeks from "../../assets/icons8-geeksforgeeks.svg";
import deutschebank from "../../assets/deutsche-bank-1.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div className="experiences">
        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <header>
              <div className="company-logo">
                <img src={deutschebank} alt="Visit site" />
                <h3 className="company-name">Deutsche Bank</h3>
              </div>
              <div className="experience-links">
                <h5>May 2023 - July 2023</h5>
                <a href="https://www.db.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
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
                <li>HQL</li>
                <li>Cucumber</li>
                <li>OracleSQL</li>
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
                <h5>July 2022 - Aug 2022</h5>
                <a
                  href="https://www.geeksforgeeks.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
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
