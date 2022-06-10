import { Typography } from "@rmwc/typography";
import styles from "./palette-card.module.scss";

export const WBPaletteCard = () => (
  <div className={`${styles["palette-card"]} ${styles.wb}`}>
    <div className={`${styles.half} black`}>
      <Typography use="overline" className={styles.subtitle}>
        #000
      </Typography>
      <Typography use="headline6" className={styles.title}>
        Black
      </Typography>
    </div>
    <div className={`${styles.half} white`}>
      <Typography use="overline" className={styles.subtitle}>
        #fff
      </Typography>
      <Typography use="headline6" className={styles.title}>
        White
      </Typography>
    </div>
  </div>
);
