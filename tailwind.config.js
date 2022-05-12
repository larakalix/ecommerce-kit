module.exports = {
    mode: "jit",
    content: [
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx,vue}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
        extend: {
            colors: {
                cms__kyblue: "#00b5ff",
                cm__main_text: "#2a4057",
                cm__secondary_text: "#c3c9d1",
                cm__tertiary_text: "#f5f5f5",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
