import Image from "next/image";

import classes from "./css/hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpeg"
          height={500}
          width={500}
          alt="An Image showing Radmehr"
        />
      </div>
      <h1>Hi, Im Radmehr</h1>
      <p>
        I blog about web development - especially frontend framework like
        Angular or React.
      </p>
    </section>
  );
};

export default Hero;
