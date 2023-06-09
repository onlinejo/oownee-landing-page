const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // PRIMARY COLORS
        primary: "#437EF7",
        midGreen: "#36B37E",
        textDarkGrey: "#272D37",
        textMidDarkGrey: "#2E343F",
        textLightGrey: "#5F6D7E",
        sectionLightBlue: "#F8F9FB",
        borderGrey: "#EAEBF0",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

/*

bodyOverflow: function (modal) {
  document.querySelector('body').classList.remove('overflow-hidden', 'overflow-visible');
  document.querySelector('body').classList.add(modal ? 'overflow-hidden' : 'overflow-visible');
}
*/
