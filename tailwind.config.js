module.exports = {
    darkMode: 'class', // Enable dark mode
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          primary: "#6C47FF", // Purple shade
          secondary: "#FF6B6B", // Red shade
          accent: "#FFD700", // Gold accent
        },
        backdropBlur: {
          xs: "2px",
        },
      },
    },
    plugins: [],
  };
  