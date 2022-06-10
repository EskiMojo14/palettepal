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
import { Fragment, useReducer, useState } from "react";
import { PaletteCard } from "../src/components/palette/palette-card";
import { WBPaletteCard } from "../src/components/palette/wb-palette-card";
import palette from "../src/palette";
import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  const [showPalette, toggle] = useReducer((bool) => !bool, false);
  return (
    <div className={styles.container}>
      <Head>
        <title>PalettePal</title>
        <meta name="description" content="Material Design Palette" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleTopAppBar
        fixed
        className={styles["app-bar"]}
        title="PalettePal"
        actionItems={[
          {
            icon: "palette",
            onClick: toggle,
            className: styles["app-bar-icon"],
          },
        ]}
      />
      <TopAppBarFixedAdjust className={styles["palette-grid"]}>
        {Object.keys(palette).map((color, index) => (
          <Fragment key={color}>
            {index === 2 && <WBPaletteCard />}
            <PaletteCard {...{ color, showPalette }} />
          </Fragment>
        ))}
      </TopAppBarFixedAdjust>
    </div>
  );
};

export default Home;
