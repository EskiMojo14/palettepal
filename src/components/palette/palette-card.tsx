import { Ripple } from "@rmwc/ripple";
import { Typography } from "@rmwc/typography";
import { Palette, palette, paletteNames } from "../../palette";
import styles from "./palette-card.module.scss";

export type PaletteCardProps = {
  color: string;
  shade: keyof Palette;
};

export const PaletteCard = ({ color, shade }: PaletteCardProps) => (
  <Ripple>
    <div className={`${styles["palette-card"]} ${color}-${shade}`}>
      <Typography use="overline" className={styles.subtitle}>
        {palette[color][shade]}
      </Typography>
      <Typography use="headline6" className={styles.title}>
        {paletteNames[color]} {`${shade}`.toUpperCase()}
      </Typography>
    </div>
  </Ripple>
);
