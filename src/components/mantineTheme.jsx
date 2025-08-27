import { createTheme } from "@mantine/core";

const mantineTheme = createTheme({
  autoContrast: true,
  primaryColor: "grape",
  fontFamily: "'Outfit Variable', sans-serif",
  defaultGradient: { from: "grape", to: "pink", deg: 45 },
  primaryShade: { dark: 6, light: 7 },
  fontFamilyMonospace: "'Chivo Mono Variable', monospace",
});

export default mantineTheme;
