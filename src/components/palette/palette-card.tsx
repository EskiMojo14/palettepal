import { Ripple } from "@rmwc/ripple";
import { Typography } from "@rmwc/typography";
import Link from "next/link";
import { Palette, palette, paletteNames } from "../../palette";
import styles from "./palette-card.module.scss";

export type PaletteCardProps = {
  color: string;
  shade: keyof Palette;
};

export const PaletteCard = ({ color, shade }: PaletteCardProps) => (
  <Link href={`/palette/${color}`}>
    <Ripple>
      <div className={`${styles["palette-card"]} ${color}-${shade}`}>
        <Typography use="overline" className={styles.overline}>
          {palette[color][shade]}
        </Typography>
        <Typography use="headline6" className={styles.title}>
          {paletteNames[color]}
        </Typography>
        <Typography use="subtitle1" className={styles.subtitle}>
          {`${shade}`.toUpperCase()}
        </Typography>
      </div>
    </Ripple>
  </Link>
);
