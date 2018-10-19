import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  scaleRatio: 3.2,
  headerFontFamily: ["Raleway", "sans-serif"],
  bodyFontFamily: ["Quattrocento", "serif"],
  googleFonts: [
    {
      name: "Raleway",
      styles: ["700", "500", "400"]
    },
    {
      name: "Quattrocento",
      styles: ["400", "400i", "700", "700i"]
    }
  ]
});

export default typography;
