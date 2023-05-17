import styles from "./whoAreWe.module.css";
import GroupPhoto from "../who are we/assets/group_photo_01.png";
import TickBoxes from "../who are we/assets/tickbox.png";

export default function WhoAreWe() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.imageContainer}>
            <img className={styles.groupPhoto} src={GroupPhoto} alt="" />
          </div>

          <section className={styles.whoWeAreContainer}>
            <div>
              <h6 className={styles.whoWeAreHeading}>WHO WE ARE</h6>
            </div>
            <div>
              <h1 className={styles.innerHeading}>
                METRO NZ IS ONE OF THE TOP AUCKLAND PROPERTY MANAGEMENT
                COMPANIES
              </h1>
            </div>
            <div>
              <p className={styles.innerBody}>
                Here at Metro NZ we set the bar high. All of our staff are
                property investors who have expert knowledge of the property
                market, and your best interest in mind at all times.
                <br />
                <br />
                Our award for “Excellence in Strategy and Planning” shows that
                our company systems are sound, from initial contact and
                agreement to looking after existing and finding new tenants and
                managing your property long-term.
              </p>
            </div>

            <div className={styles.tickBoxContainer}>
              <div className={styles.leftTickBoxes}>
                <div className={styles.tickBoxes}>
                  <img src={TickBoxes} alt="" />
                  Free appraisals
                </div>
                <div className={styles.tickBoxes}>
                  <img src={TickBoxes} alt="" />
                  People-focused company
                </div>
                <div className={styles.tickBoxes}>
                  <img src={TickBoxes} alt="" />
                  Property investment experience
                </div>
              </div>

              <div className={styles.rightTickBoxes}>
                <div className={styles.tickBoxes}>
                  <img src={TickBoxes} alt="" />
                  Award-winning systems
                </div>
                <div className={styles.tickBoxes}>
                  <img src={TickBoxes} alt="" />
                  Give back to the community
                </div>
                <div className={styles.tickBoxes}>
                  <img src={TickBoxes} alt="" />
                  Maximum returns for landlords
                </div>
              </div>
            </div>

            <div className={styles.companyOutterContainer}>
              <div className={styles.companyInnerContainer}>
                <div className={styles.bodyText}>
                  <h2>15Y</h2>
                  <p>EXPERIENCE</p>
                </div>
                <div className={styles.bodyText}>
                  <h2>25+</h2>
                  <p>TEAM MEMBERS</p>
                </div>
                <div className={styles.bodyText}>
                  <h2>500+</h2>
                  <p>TOTAL CLIENTS</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
