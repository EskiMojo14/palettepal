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
import { paletteNames } from "../../src/palette";

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

export const PaletteDisplay = ({ color }: PaletteDisplayProps) => (
  <div>
    <Head>
      <title>PalettePal: {paletteNames[color]}</title>
    </Head>
    <TopAppBar className={`${color}-500`}>
      <TopAppBarRow>
        <TopAppBarSection alignStart>
          <Link href="/">
            <TopAppBarNavigationIcon icon="arrow_back" />
          </Link>
          <TopAppBarTitle>PalettePal: {paletteNames[color]}</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  </div>
);

export default PaletteDisplay;
