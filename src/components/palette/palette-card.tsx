import { classNames } from "@rmwc/base";
import { Ripple } from "@rmwc/ripple";
import { Typography } from "@rmwc/typography";
import Link from "next/link";
import { palette, paletteNames } from "../../palette";
import styles from "./palette-card.module.scss";

export type PaletteCardProps = {
  color: string;
  showPalette?: boolean;
  className?: string;
};

export const PaletteCard = ({
  color,
  showPalette,
  className,
}: PaletteCardProps) => (
  <Link href={`/palette/${color}`}>
    <div className={classNames(styles["palette-card-container"], className)}>
      <Ripple>
        <div className={classNames(styles["palette-card"], `${color}-500`)}>
          <div className={styles["text-row"]}>
            <Typography use="overline" className={styles.overline}>
              {palette[color][500]}
            </Typography>
            <Typography use="headline6" className={styles.title}>
              {paletteNames[color]}
            </Typography>
          </div>
          <div
            className={classNames(styles["palette-row"], {
              [styles.visible]: showPalette,
            })}
          >
            {Object.keys(palette[color] ?? {}).map((shade) => (
              <div key={shade} className={styles["palette-item"]}>
                <Typography use="overline" className={styles.label}>
                  {`${shade}`.toUpperCase()}
                </Typography>
                <div
                  className={classNames(
                    styles["palette-square"],
                    `${color}-${shade}`,
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </Ripple>
    </div>
  </Link>
);
