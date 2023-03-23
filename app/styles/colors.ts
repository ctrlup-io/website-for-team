export const RAINBOW_PINK = "#ff85c9";
export const RAINBOW_YELLOW = "#E3E2C3";
export const RAINBOW_GREEN = "#59ff8d";
export const RAINBOW_BLUE = "#98DDFF";

const rainbowLinearGradientStops = [
  [0, RAINBOW_PINK],
  [24, RAINBOW_YELLOW],
  [48, RAINBOW_GREEN],
  [76, RAINBOW_BLUE],
];

export const RAINBOW = (deg = 90) =>
  `linear-gradient(${deg}deg${rainbowLinearGradientStops
    .map((stop) => `, ${stop[1]} ${stop[0]}%`)
    .join("")})`;

export const BLACK = "#131313";
export const WHITE = "#FFFDF6";
export const RED = "#FF8B92";
export const ORANGE = "#FFDCA8";
export const GREEN = "#98E4AD";
