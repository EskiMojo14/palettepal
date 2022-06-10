import {
  SimpleTopAppBar,
  TopAppBar,
  TopAppBarFixedAdjust,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from "@rmwc/top-app-bar";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { PaletteCard } from "../src/components/palette/palette-card";
import { WBPaletteCard } from "../src/components/palette/wb-palette-card";
import palette, { paletteNames } from "../src/palette";
import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PalettePal</title>
        <meta name="description" content="Material Design Palette" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleTopAppBar className={styles["app-bar"]} title="PalettePal" />
      <div className={styles["palette-grid"]}>
        {Object.keys(palette).map((color, index) => (
          <Fragment key={color}>
            {index === 2 && <WBPaletteCard />}
            <PaletteCard color={color} shade={500} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
