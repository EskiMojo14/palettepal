import type { NextPage } from "next";
import Head from "next/head";
import { PaletteCard } from "../src/components/palette/palette-card";
import { WBPaletteCard } from "../src/components/palette/wb-palette-card";
import palette from "../src/palette";
import styles from "../styles/home.module.scss";

console.log(palette);

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PalettePal</title>
        <meta name="description" content="Material Design Palette" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles["palette-grid"]}>
        {Object.keys(palette).map((color, index) => (
          <>
            {index === 2 && <WBPaletteCard />}
            <PaletteCard key={color} color={color} shade={500} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
