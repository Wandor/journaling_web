export const HTTP_REQUEST_TIMEOUT = 60000;


export const SYSTEM_MESSAGES = {
  NOT_FOUND: "Page not found",
  SERVER_ERROR: "Internal Server Error",
  INVALID_LOGIN_ERROR: "Invalid Username Or Password",
  CONNECTION_ERROR: "Connection Error! Please Check your connection",
  INVALID_EMAIL_ERROR: "",
  INVALID_PHONE_NUMBER_ERROR: "",
  API_CALL_ERROR:
    "Sorry! something went wrong, please contact our support team",
};
export const userKey = "authUser";
export const accessTokenKey = "token";
export const refreshTokenKey = "refreshToken";
export const errorMessages = {
  countryRequired: "You must select a country",
  countyRequired: "You must select a county",
  uaiNameRequired: "You must provide the name of the UAI",
  uaiDescriptionRequired: "The description of UAI is required",
  uaiIdRequired: "The ID Number of UAI is required",
  uaiId: "You have not selected UAI",
  seasonRequired: "You must select a county",
  premiumRateRequired: "The ID Number of UAI is required",
  subsidyRateRequired: "The description of UAI is required",
  isPercentage: "You must provide the name of the UAI",
  nameRequired: "You must provide the name of the Bank",
  idRequired: "You have not selected a Bank to edit",
  permissionNameRequired: "Please the name of the Security Group | Role",
};

export const layoutTypes = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
  TWOCOLUMN: "twocolumn",
  SEMIBOX: "semibox",
};

export const layoutModeTypes = {
  LIGHTMODE: "light",
  DARKMODE: "dark",
};

export const leftSidebarTypes = {
  LIGHT: "light",
  DARK: "dark",
  GRADIENT: "gradient",
  GRADIENT_2: "gradient-2",
  GRADIENT_3: "gradient-3",
  GRADIENT_4: "gradient-4",
};

export const layoutWidthTypes = {
  FLUID: "lg",
  BOXED: "boxed",
};

export const layoutPositionTypes = {
  FIXED: "fixed",
  SCROLLABLE: "scrollable",
};

export const topbarThemeTypes = {
  LIGHT: "light",
  DARK: "dark",
};

export const leftsidbarSizeTypes = {
  DEFAULT: "lg",
  COMPACT: "md",
  SMALLICON: "sm",
  SMALLHOVER: "sm-hover",
};

export const leftSidebarViewTypes = {
  DEFAULT: "default",
  DETACHED: "detached",
};

export const leftSidebarImageTypes = {
  NONE: "none",
  IMG1: "img-1",
  IMG2: "img-2",
  IMG3: "img-3",
  IMG4: "img-4",
};

export const preloaderTypes = {
  ENABLE: "enable",
  DISABLE: "disable",
};

export const sidebarVisibilitytypes = {
  SHOW: "show",
  HIDDEN: "hidden",
};

export const colorVariants = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

export const extendedColorVariants = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "pink",
  "purple",
];

export const MENU_ITEMS = [
  {
    key: "home",
    label: "Home",
    url: "/",
    isTitle: false,
  },
  {
    key: "process",
    label: "Process",
    url: "#process",
    isTitle: false,
  },
  {
    key: "contact-us",
    label: "Contact us",
    url: "/pages/contact-us",
    isTitle: false,
  },
];

export const HORIZONTAL_MENU_ITEMS = [
  {
    key: "home",
    label: "Home",
    url: "/",
    isTitle: true,
  },
  {
    key: "process",
    label: "Process",
    pageId: "partner-process",
    isTitle: true,
  },
  {
    key: "contact-us",
    label: "Contact us",
    url: "/pages/contact-us",
    isTitle: true,
  },
  {
    key: "programs",
    label: "Programs",
    url: "/pages/programs",
    isTitle: true,
  },
];

export const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
  },
  header: {
    backgroundColor: "white",
    padding: "1rem",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  layout: {
    display: "flex",
  },
  sidebar: {
    width: "256px",
    backgroundColor: "white",
    borderRight: "1px solid #e5e7eb",
    padding: "1rem",
  },
  mainContent: {
    flex: 1,
    padding: "1.5rem",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
    marginBottom: "1.5rem",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    padding: "1rem",
  },
  filterSection: {
    backgroundColor: "white",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    marginBottom: "1.5rem",
    padding: "1rem",
  },
  chartSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "1.5rem",
  },
  chartCard: {
    backgroundColor: "white",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    padding: "1.5rem",
  },
  "@media (max-width: 768px)": {
    layout: {
      flexDirection: "column",
    },
    filterSection: {
      flexDirection: "column",
    },
    cardGrid: {
      gridTemplateColumns: "1fr",
    },
  },
  "@media (max-width: 480px)": {
    filterSection: {
      gap: "0.5rem",
    },
    card: {
      padding: "0.5rem",
    },
  },
};

export const statusList = [
  { value: "1", label: "Open" },
  { value: "2", label: "Closed" },
];

export const defaultPagination = {
  totalItems: 0,
  totalPages: 0,
  page: 0,
  size: 10,
};
