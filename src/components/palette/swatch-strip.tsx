import { Ripple } from "@rmwc/ripple";
import { Typography } from "@rmwc/typography";
import palette, { Palette } from "../../palette";
import { notify } from "../../snackbar-queue";
import styles from "./swatch-strip.module.scss";

export type SwatchStripProps = {
    color: string;
    shade: keyof Palette;
}

export const SwatchStrip = ({
    color,
    shade,
}: SwatchStripProps) => {
    const copyToClipboard = () => {
        const hex = palette[color][shade];
        if (hex) {
            navigator.clipboard.writeText(hex);
            notify({ title: "Copied to clipboard" });
        }
    };
    return (
        <div className={styles["swatch-strip-container"]} onClick={copyToClipboard}>
            <Ripple>
                <div className={`${styles["swatch-strip"]} ${color}-${shade}`}>
                    <Typography use="subtitle1" className={styles.title}>
                        {`${shade}`.toUpperCase()}
                    </Typography>
                    <Typography use="overline" className={styles.overline}>
                        {palette[color][shade]}
                    </Typography>
                </div>
            </Ripple>
        </div>
    )
};
