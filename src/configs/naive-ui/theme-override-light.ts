import { composite } from "seemly";
import type { GlobalThemeOverrides } from "naive-ui";
import theme from "../theme";

function createHoverColor(color: string, overlayAlpha: number = 0.15): string {
  return composite(color, [255, 255, 255, overlayAlpha]);
}

function createPressedColor(color: string, overlayAlpha: number = 0.15): string {
  return composite(color, [0, 0, 0, overlayAlpha]);
}

export default {
  common: {
    primaryColor: theme.primary,
    primaryColorHover: createHoverColor(theme.primary),
    primaryColorPressed: createPressedColor(theme.primary),
    infoColor: theme.info,
    infoColorHover: createHoverColor(theme.info),
    infoColorPressed: createPressedColor(theme.info),
    successColor: theme.success,
    successColorHover: createHoverColor(theme.success),
    successColorPressed: createPressedColor(theme.success),
    warningColor: theme.warning,
    warningColorHover: createHoverColor(theme.warning),
    warningColorPressed: createPressedColor(theme.warning),
    errorColor: theme.danger,
    errorColorHover: createHoverColor(theme.danger),
    errorColorPressed: createPressedColor(theme.danger),

    textColorBase: "#222222FF",
    textColor1: "#444444FF",
    textColor2: "#666666FF",
    textColor3: "#888888FF",
    bodyColor: theme.light,
    cardColor: "#FCFEFCFF",
    tableColor: "#F5F7F5FF",
    tableHeaderColor: "#FAFCFAFF",
    dividerColor: "#E6E8E6FF",
  },
  Table: {
    tdColor: "#F5F7F5FF",
  },
} as GlobalThemeOverrides;
