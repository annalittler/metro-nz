import styles from "./ourServices.module.css";
import msgIcon from "./assets/msg_icon.png";
import penRulerIcon from "./assets/pen_ruler_icon.png";
import homeIcon from "./assets/home_icon.png";

export default function Services() {
  return (
    <div className={styles.servicesMainContainer}>
      <div className={styles.servicesInnerContainer}>
        <div className={styles.headingContainer}>
          <h6>OUR SERVICES</h6>
          <h1>
            WORKING WITH LANDLORDS, TENANTS, BUILDING OWNERS AND PROPERTY
            INVESTORS
          </h1>
        </div>
        <div className={styles.cardsContainer}>
          {/* card 1 */}
          <div className={styles.cards}>
            <div className={styles.cardInner}>
              <div>
                <img className={styles.iconCards} src={msgIcon} alt="" />
              </div>
              <div className={styles.innerCards}>
                <h4>PROPERTY MANAGEMENT</h4>
              </div>
              <div className={styles.innerCards}>
                <p>
                  Get in touch with our experienced team in the Auckland region
                  and enjoy property management services of the highest
                  standard.
                </p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className={styles.middleCard}>
            <div className={styles.cardInner}>
              <div>
                <img className={styles.iconCards} src={penRulerIcon} alt="" />
              </div>
              <div className={styles.innerCards}>
                <h4 className={styles.middleCardText}>JOIN WITH METRO NZ</h4>
              </div>
              <div className={styles.innerCards}>
                <p className={styles.middleCardText}>
                  Complete the simple contact form or call us and we’ll be in
                  touch to transfer the management properties to Metro NZ and to
                  work with minimal disruption.
                </p>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className={styles.cards}>
            <div className={styles.cardInner}>
              {/* <a href="/search"> */}
              <a href="/listings">
                <div>
                  <img className={styles.iconCards} src={homeIcon} alt="" />
                </div>
                <div className={styles.innerCards}>
                  <h4>FIND A RENTAL</h4>
                </div>
                <div className={styles.innerCards}>
                  <p>
                    Find your ideal property in Auckland, around New Zealand and
                    the world. We have lots of properties available to rent!
                    Begin your search today or give us a call.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
