import { css } from '@emotion/react';
import image from './images/ani.jpg';
import image4 from './images/as.jpg';
import image1 from './images/bio.jpg';
import image3 from './images/dd.jpg';
import image6 from './images/it.jpg';
import image2 from './images/mas.jpg';
import image7 from './images/team.jpg';
import image5 from './images/wir.jpg';
import mainLogo from './spengerlogo.png';

/** @jsxImportSource @emotion/react */

const wrapperStyles = css`
  max-width: 1200px;
  width: 100%;
`;

const headerStyles = css`
  font-size: 12px;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0px;
`;

const navMenuList = css`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 40px;

  li > a {
    text-decoration: none;
    color: black;
    font-size: 15px;
    padding: 10px;
    line-height: 80px;
    align-items: center;
  }
`;

const gridStyles = css`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 100px;
`;

const heroParStyles = css`
  display: flex;
  font-size: 12px;
  font-weight: 50px;
`;

const heroHeadingSyles = css`
  font-size: 24px;
  font-family: 100px;
`;

function App() {
  return (
    <div>
      <main>
        <div css={wrapperStyles}>
          <header css={headerStyles}>
            <img src={mainLogo} alt="logo" />
            <section>heroStyles</section>
            <nav>
              <ul css={navMenuList} className="selected">
                <li>
                  <a href="/">Aktuelles</a>
                </li>
                <li>
                  <a href="/">Ausbildung ab 14</a>
                </li>
                <li>
                  <a href="/">Ausbildung a 17</a>
                </li>
                <li>
                  <a href="/">Informationen</a>
                </li>
                <li>
                  <a href="/">Versuchsanstalt</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div>
          <h4 css={heroHeadingSyles}>ANMELDUNG 2022/23</h4>
          <p css={heroParStyles}>
            Unser Anmeldesystem für das Schuljahr 2022/23 finden Sie hier:
            Achtung: Laden Sie Ihre Schulnachricht bitte im Anmeldesystem hoch
            und bringen Sie sie NICHT persönlich in die Schule!
          </p>
        </div>
      </main>
      <footer css={gridStyles}>
        <img src={image} alt="logo" width={200} height={200} />
        <img src={image1} alt="logo" width={200} height={200} />
        <img src={image2} alt="logo" width={200} height={200} />
        <img src={image3} alt="logo" width={200} height={200} />
        <img src={image4} alt="logo" width={200} height={200} />
        <img src={image5} alt="logo" width={200} height={200} />
        <img src={image6} alt="logo" width={200} height={200} />
        <img src={image7} alt="logo" width={200} height={200} />
      </footer>
    </div>
  );
}

export default App;
