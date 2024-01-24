import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import tailwindScrollbar from "tailwind-scrollbar";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",

    plugins: [forms, typography, aspectRatio, tailwindScrollbar],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans]
            },
            spacing: {
                4.5: "18px",
                5.5: "22px",
                7.5: "30px",
                25: "100px",
                70: "280px"
            }
        },
        screens: {
            xs: "380px",
            ...defaultTheme.screens
        }
    }
};
