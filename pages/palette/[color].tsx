import {
  TopAppBar,
  TopAppBarFixedAdjust,
  TopAppBarNavigationIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from "@rmwc/top-app-bar";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import palette, { Palette, paletteNames } from "../../src/palette";
import styles from "../../styles/palette-page.module.scss";
import { CSSProperties, useMemo } from "react";
import { SwatchStrip } from "../../src/components/palette/swatch-strip";

export const getStaticProps: GetStaticProps = (ctx) => ({
  props: { color: ctx.params?.color },
});

export const getStaticPaths: GetStaticPaths = () => ({
  paths: Object.keys(paletteNames).map((color) => ({ params: { color } })),
  fallback: false,
});

export type PaletteDisplayProps = {
  color: string;
};

export const PaletteDisplay = ({ color }: PaletteDisplayProps) => {
  const shades = useMemo(
    () => Object.keys(palette[color] ?? {}) as (keyof Palette)[],
    [color],
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>PalettePal: {paletteNames[color]}</title>
      </Head>
      <TopAppBar fixed className={`${styles["app-bar"]} ${color}-500`}>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <Link href="/">
              <TopAppBarNavigationIcon
                className={styles["nav-icon"]}
                icon="arrow_back"
              />
            </Link>
            <TopAppBarTitle>PalettePal: {paletteNames[color]}</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust
        className={styles["palette-grid"]}
        style={{ "--grid-rows": shades.length } as CSSProperties}
      >
        {shades.map((shade) => (
          <SwatchStrip key={shade} {...{ color, shade }} />
        ))}
      </TopAppBarFixedAdjust>
    </div>
  );
};

export default PaletteDisplay;
