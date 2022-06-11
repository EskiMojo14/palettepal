import { Typography } from "@rmwc/typography";
import Link from "next/link";
import { Palette, palette, paletteNames } from "../../palette";
import styles from "./palette-card.module.scss";

export type PaletteCardProps = {
  color: string;
  shade?: keyof Palette;
  showPalette?: boolean;
  horizontal?: boolean;
};

export const PaletteCard = ({
  color,
  shade,
  showPalette,
  horizontal,
}: PaletteCardProps) => (
  <Link href={`/palette/${color}`}>
    <div className={styles["palette-card-container"]}>
      <div className={`${styles["palette-card"]} ${color}-${shade ?? 500}`}>
        <div
          className={`${styles["text-row"]} ${horizontal ? styles.horizontal : ""
            }`}
        >
          {shade && (
            <Typography use="subtitle1" className={styles.title}>
              {`${shade}`.toUpperCase()}
            </Typography>
          )}
          <Typography use="overline" className={styles.overline}>
            {palette[color][shade ?? 500]}
          </Typography>
          {!shade && (
            <Typography use="headline6" className={styles.title}>
              {paletteNames[color]}
            </Typography>
          )}
        </div>
        {!shade && (
          <div
            className={`${styles["palette-row"]} ${showPalette ? styles.visible : ""
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
        )}
      </div>
    </div>
  </Link>
);
