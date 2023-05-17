import styles from "./Testimonials.module.css";
import testim1 from "./assets/testim1.png";
import testim2 from "./assets/testim2.png";
import testim3 from "./assets/testim3.png";
import star from "./assets/star.png";
import half from "./assets/halfstar.png";
import { useState } from "react";

export default function Testimonials() {
  function handleClick(i) {
    setInvis(true);
    setTimeout(() => {
      setInvis(false);
      setIndex(i);
    }, 300);
  }

  const [index, setIndex] = useState(0);
  const [invis, setInvis] = useState(false);
  const testimonials = [
    {
      rating: [star, star, star, star, half],
      comment: `Everything was very smooth and efficient, which I really appreciated. I will be recommending their services to other investors. You can tell Frank and Zsuzsanna really care about what they do.`,
      image: testim1,
      name: "JOHN DOE",
      occupation: "PROPERTY INVESTOR",
    },
    {
      rating: [star, star, star, star, star],
      comment: `I knew what I wanted. Frank knew what I wanted. In just one week he delivered. I found my home sweet home thanks to the dedicated work put in by the team at Metro NZ.`,
      image: testim2,
      name: "JANE LEE",
      occupation: "TENANT",
    },
    {
      rating: [star, star, star, star, half],
      comment: `For the first time I was offered the approach, "we are here to offer help in getting you the right tenant" and take care of all aspects of signing a new tenant. What a treat to partner with Frank and the team.`,
      image: testim3,
      name: "KEVIN HA",
      occupation: "LANDLORD",
    },
  ];
  return (
    <div id={styles.container}>
      <div id={styles.sectionContainer}>
        <div id={styles.left}>
          <div id={styles.sectionTitle}>CLIENT FEEDBACK</div>
          <div id={styles.title}>TESTIMONIALS</div>
          <div id={styles.content}>
            Here at Metro NZ, we streamline our systems to take the pressure off
            property owners and landlords. We also ensure that our tenants
            receive respectful treatment. In fact we like to say that we treat
            our tenants like we would treat our guests. Read what some of our
            current customers have to say about partnering with us.
          </div>
        </div>
        <div id={styles.right}>
          <div id={styles.rightBox}>
            <div
              id={invis ? styles.innerContainerhidden : styles.innerContainer}
            >
              <div id={styles.rating}>
                {testimonials[index].rating.map((rate) => {
                  return <img className={styles.stars} src={rate} alt="star" />;
                })}
              </div>
              <div id={styles.comment}>{testimonials[index].comment}</div>
              <div id={styles.person}>
                <div id={styles.image}>
                  <img
                    id={styles.testim}
                    src={testimonials[index].image}
                    alt="person"
                  ></img>
                </div>
                <div id={styles.details}>
                  <div id={styles.name}>{testimonials[index].name}</div>
                  <div id={styles.occupation}>
                    {testimonials[index].occupation}
                  </div>
                </div>
              </div>
            </div>
            <div id={styles.circleContainer}>
              <div
                onClick={() => {
                  handleClick(0);
                }}
                className={index === 0 ? styles.circleActive : styles.circle}
              ></div>
              <div
                onClick={() => {
                  handleClick(1);
                }}
                className={index === 1 ? styles.circleActive : styles.circle}
              ></div>
              <div
                onClick={() => {
                  handleClick(2);
                }}
                className={index === 2 ? styles.circleActive : styles.circle}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
