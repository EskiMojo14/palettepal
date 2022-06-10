import scssPalette from "../styles/_palette.module.scss";

export type Palette = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  a100?: string;
  a200?: string;
  a400?: string;
  a700?: string;
};

export const palette = Object.entries(scssPalette).reduce<
  Record<string, Palette>
>((acc, [key, value]) => {
  const [color, shade] = key.split("__");
  acc[color] ??= {} as Palette;
  acc[color][shade as keyof Palette] = value;
  return acc;
}, {});

export const paletteOrder = [
  "red",
  "pink",
  "purple",
  "deep-purple",
  "indigo",
  "blue",
  "light-blue",
  "cyan",
  "teal",
  "green",
  "light-green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deep-orange",
  "brown",
  "grey",
  "blue-grey",
];

export default palette;
