export type ThemeName = "apple-hig" | "material-3" | "fluent-2";

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

type ButtonStateRecipe = {
  bg: string;
  color: string;
  border: string;
  shadow: string;
  hoverBg: string;
  hoverColor: string;
  hoverBorder: string;
  hoverShadow: string;
  activeBg: string;
  activeColor: string;
  activeBorder: string;
  activeShadow: string;
};

type FieldStateRecipe = {
  bg: string;
  border: string;
  shadow: string;
  color: string;
  placeholder: string;
  hoverBg: string;
  hoverBorder: string;
  focusBg: string;
  focusBorder: string;
  focusShadow: string;
};

type SurfaceRecipe = {
  bg: string;
  border: string;
  shadow: string;
  backdropBlur: string;
  backdropSaturate: string;
};

type TabStateRecipe = {
  bg: string;
  color: string;
  border: string;
  shadow: string;
  hoverBg: string;
  hoverColor: string;
  hoverBorder: string;
};

type BadgeToneRecipe = {
  bg: string;
  color: string;
  border: string;
};

export type ComponentRecipes = {
  surface: {
    panel: SurfaceRecipe;
    subtle: SurfaceRecipe;
  };
  button: {
    radius: string;
    letterSpacing: string;
    hoverTransform: string;
    activeTransform: string;
    primary: ButtonStateRecipe;
    secondary: ButtonStateRecipe;
    outlined: ButtonStateRecipe;
    ghost: ButtonStateRecipe;
    danger: ButtonStateRecipe;
  };
  input: {
    radius: string;
    default: FieldStateRecipe;
  };
  select: {
    radius: string;
    indicator: string;
    default: FieldStateRecipe;
  };
  card: {
    default: {
      bg: string;
      border: string;
      shadow: string;
      radius: string;
      padding: string;
      backdropBlur: string;
      backdropSaturate: string;
    };
  };
  tabs: {
    shell: {
      bg: string;
      border: string;
      radius: string;
      padding: string;
    };
    idle: TabStateRecipe;
    active: TabStateRecipe;
  };
  badge: {
    height: string;
    radius: string;
    fontWeight: string;
    neutral: BadgeToneRecipe;
    accent: BadgeToneRecipe;
    success: BadgeToneRecipe;
    warning: BadgeToneRecipe;
    danger: BadgeToneRecipe;
  };
  table: {
    shell: {
      bg: string;
      border: string;
      radius: string;
      backdropBlur: string;
      backdropSaturate: string;
    };
    header: {
      bg: string;
      color: string;
      border: string;
      fontWeight: string;
    };
    row: {
      border: string;
      oddBg: string;
      hoverBg: string;
      color: string;
      secondaryColor: string;
      height: string;
    };
  };
  slider: {
    trackBg: string;
    trackFill: string;
    thumbBg: string;
    thumbBorder: string;
    thumbShadow: string;
    thumbMask: string;
  };
  chart: {
    panelBg: string;
    panelBorder: string;
    panelOverlay: string;
    gridLine: string;
    barRadius: string;
    barFill: string;
    barFillAlt: string;
    barBorder: string;
    barShadow: string;
  };
  modal: {
    radius: string;
    maxWidth: string;
    backdropBg: string;
    bg: string;
    border: string;
    shadow: string;
    closeBg: string;
    closeBorder: string;
    closeColor: string;
    closeHoverBg: string;
    closeHoverBorder: string;
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
  recipes: ComponentRecipes;
  density: DensityProfile;
};
