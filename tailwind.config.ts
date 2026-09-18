export default {
  theme: {
    extend: {
      keyframes: {
        "float-up": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-400px)", opacity: "0" },
        },
      },
      animation: {
        "float-up": "float-up linear infinite",
      },
    },
  },
}