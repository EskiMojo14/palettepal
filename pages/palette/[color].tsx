import { GetStaticPaths, GetStaticProps } from "next";
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
  <div>{paletteNames[color]}</div>
);

export default PaletteDisplay;
