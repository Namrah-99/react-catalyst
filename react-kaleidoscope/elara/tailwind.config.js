/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
// import tailwindForms from "@tailwindcss/forms";
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "h-sm": "var(--text-h-sm)",
      "h-md": "var(--text-h-md)",
      "h-lg": "var(--text-h-lg)",
      "p-xs": "var(--text-p-xs)",
      "p-sm": "var(--text-p-sm)",
      "p-md": "var(--text-p-md)",
      "p-lg": "var(--text-p-lg)",
    },
    extend: {
      colors: {
        // themes
        primary: "var(--primary)",
        "primary-focus": "var(--primary-focus)",
        "primary-content": "var(--primary-content)",

        "primary-500": "var(--primary-500)",
        "primary-500-focus": "var(--primary-500-focus)",

        secondary: "var(--secondary)",
        "secondary-focus": "var(--secondary-focus)",
        "secondary-content": "var(--secondary-content)",

        tertiary: "var(--tertiary)",
        "tertiary-focus": "var(--tertiary-focus)",
        "tertiary-content": "var(--tertiary-content)",

        neutral: "var(--neutral)",
        "neutral-focus": "var(--neutral-focus)",
        "neutral-content": "var(--neutral-content)",

        info: "var(--info)",
        "info-focus": "var(--info-focus)",
        "info-content": "var(--info-content)",

        success: "var(--success)",
        "success-focus": "var(--success-focus)",
        "success-content": "var(--success-content)",

        warning: "var(--warning)",
        "warning-focus": "var(--warning-focus)",
        "warning-content": "var(--warning-content)",

        error: "var(--error)",
        "error-focus": "var(--error-focus)",
        "error-content": "var(--error-content)",

        disabled: "var(--disabled)",
        "disabled-focus": "var(--disabled-focus)",
        "disabled-content": "var(--disabled-content)",

        // skins
        "skin-primary": "var(--bg-skin-primary)",
        "skin-secondary": "var(--bg-skin-secondary)",
        "skin-tertiary": "var(--bg-skin-tertiary)",

        // text
        "clr-primary": "var(--text-clr-primary)",
        "clr-secondary": "var(--text-clr-secondary)",
        "clr-tertiary": "var(--text-clr-tertiary)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
      },
      fontFamily: {
        primary: "var(--font-family)",
      },
      screens: {
        "3xl": "1680px",
        "4xl": "1800px",
        "5xl": "2000px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false,
  },
};
