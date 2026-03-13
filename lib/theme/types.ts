export type ThemeName = "apple-hig" | "material-3" | "fluent-2";
export type AppearanceMode = "standard" | "liquid-glass";

export type PrimitiveTokens = {
  color: {
    bgBase: string;
    bgAmbient: string;
    surfaceBase: string;
    surfaceElevated: string;
    textStrong: string;
    textMuted: string;
    accent: string;
    accentSoft: string;
    success: string;
    warning: string;
    danger: string;
    borderSubtle: string;
    borderDefault: string;
    borderStrong: string;
  };
  radius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  shadow: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  spacing: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    section: string;
  };
  typography: {
    fontDisplay: string;
    fontBody: string;
    fontMono: string;
    scaleHero: string;
    scaleH1: string;
    scaleH2: string;
    scaleBody: string;
    scaleSmall: string;
    trackingDisplay: string;
  };
  icon: {
    sm: string;
    md: string;
    lg: string;
  };
  control: {
    sm: string;
    md: string;
    lg: string;
  };
  motion: {
    fast: string;
    base: string;
    slow: string;
    easeStandard: string;
    easeEmphasis: string;
  };
};

export type SemanticTokens = {
  background: string;
  backgroundMuted: string;
  surface: string;
  surfaceMuted: string;
  surfaceElevated: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  accent: string;
  accentSoft: string;
  borderSubtle: string;
  borderDefault: string;
  borderStrong: string;
  focusRing: string;
  success: string;
  warning: string;
  danger: string;
  overlay: string;
};

export type ComponentTokens = {
  button: {
    radius: string;
    letterSpacing: string;
    primaryShadow: string;
    ghostBorder: string;
  };
  input: {
    radius: string;
    borderWidth: string;
    background: string;
  };
  card: {
    radius: string;
    borderWidth: string;
    padding: string;
    shadow: string;
  };
  table: {
    rowHeight: string;
    headerWeight: string;
    stripeOpacity: string;
  };
  tabs: {
    radius: string;
    activeShadow: string;
  };
  modal: {
    radius: string;
    maxWidth: string;
  };
};

export type DensityProfile = {
  density: "airy" | "balanced" | "compact";
  contentMaxWidth: string;
  sectionGap: string;
  gridGap: string;
  toolbarHeight: string;
  panelPadding: string;
  tableDensity: string;
};

export type ThemeMeta = {
  name: ThemeName;
  label: string;
  inspiration: string;
  description: string;
};

export type ThemeDefinition = {
  meta: ThemeMeta;
  primitives: PrimitiveTokens;
  semantics: SemanticTokens;
  components: ComponentTokens;
  density: DensityProfile;
};
