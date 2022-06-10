import {
  TopAppBar,
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
import { PaletteCard } from "../../src/components/palette/palette-card";

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
    [color]
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>PalettePal: {paletteNames[color]}</title>
      </Head>
      <TopAppBar className={`${styles["app-bar"]} ${color}-500`}>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <Link href="/">
              <TopAppBarNavigationIcon icon="arrow_back" />
            </Link>
            <TopAppBarTitle>PalettePal: {paletteNames[color]}</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <div
        className={styles["palette-grid"]}
        style={{ "--grid-rows": shades.length } as CSSProperties}
      >
        {shades.map((shade) => (
          <PaletteCard key={shade} horizontal {...{ color, shade }} />
        ))}
      </div>
    </div>
  );
};

export default PaletteDisplay;
