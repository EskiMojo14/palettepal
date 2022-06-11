import { Typography } from "@rmwc/typography";
import palette, { Palette } from "../../palette";
import styles from "./swatch-strip.module.scss";

export type SwatchStripProps = {
    color: string;
    shade: keyof Palette;
}

export const SwatchStrip = ({
    color,
    shade,
}: SwatchStripProps) => (
    <div className={styles["swatch-strip-container"]}>
        <div className={`${styles["swatch-strip"]} ${color}-${shade}`}>
            <Typography use="subtitle1" className={styles.title}>
                {`${shade}`.toUpperCase()}
            </Typography>
            <Typography use="overline" className={styles.overline}>
                {palette[color][shade]}
            </Typography>
        </div>
    </div>
);
