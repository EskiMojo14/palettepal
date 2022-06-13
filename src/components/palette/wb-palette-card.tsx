import { classNames } from "@rmwc/base";
import { Typography } from "@rmwc/typography";
import styles from "./palette-card.module.scss";

export type WBPaletteCardProps = {
  className?: string;
};

export const WBPaletteCard = ({ className }: WBPaletteCardProps) => (
  <div className={classNames(styles["palette-card"], styles.wb, className)}>
    <div className={classNames(styles.half, "black")}>
      <Typography use="overline" className={styles.subtitle}>
        #000
      </Typography>
      <Typography use="headline6" className={styles.title}>
        Black
      </Typography>
    </div>
    <div className={classNames(styles.half, "white")}>
      <Typography use="overline" className={styles.subtitle}>
        #fff
      </Typography>
      <Typography use="headline6" className={styles.title}>
        White
      </Typography>
    </div>
  </div>
);
