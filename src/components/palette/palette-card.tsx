import { Ripple } from "@rmwc/ripple";
import { Typography } from "@rmwc/typography";
import Link from "next/link";
import { Palette, palette, paletteNames } from "../../palette";
import styles from "./palette-card.module.scss";

export type PaletteCardProps = {
  color: string;
  shade?: keyof Palette;
  showPalette?: boolean;
};

export const PaletteCard = ({
  color,
  shade,
  showPalette,
}: PaletteCardProps) => (
  <Link href={`/palette/${color}`}>
    <Ripple>
      <div className={`${styles["palette-card"]} ${color}-${shade ?? 500}`}>
        <div className={styles["text-row"]}>
          <Typography use="overline" className={styles.overline}>
            {palette[color][shade ?? 500]}
          </Typography>
          <Typography use="headline6" className={styles.title}>
            {paletteNames[color]}
          </Typography>
          {shade && (
            <Typography use="subtitle1" className={styles.subtitle}>
              {`${shade}`.toUpperCase()}
            </Typography>
          )}
        </div>
        <div
          className={`${styles["palette-row"]} ${
            showPalette ? styles.visible : ""
          }`}
        >
          {Object.keys(palette[color] ?? {}).map((shade) => (
            <div key={shade} className={styles["palette-item"]}>
              <Typography use="overline" className={styles.label}>
                {`${shade}`.toUpperCase()}
              </Typography>
              <div
                className={`${styles["palette-square"]} ${color}-${shade}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Ripple>
  </Link>
);
