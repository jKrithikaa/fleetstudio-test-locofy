/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "fleet-white": "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.25)",
          "200": "rgba(255, 255, 255, 0.5)",
        },
        "fleet-dark-slate-blue-alt": "#213251",
        orangered: "#ff480f",
        "fleet-cobalt-blue-alt": "#0780c0",
        black: "#000",
        "fleet-beige": "#e7e8e6",
      },
      spacing: {},
      fontFamily: {
        "desktop-body": "'Open Sans'",
        "desktop-h3": "Montserrat",
        roboto: "Roboto",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      lg: "18px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "5xl": "24px",
      "25xl": "44px",
      "16xl": "35px",
      "4xs": "9px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
