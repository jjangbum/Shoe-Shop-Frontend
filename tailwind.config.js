module.exports = {
  content: ['./src/**/*.{js, jsx}'],
  theme: {
    extend: {
      spacing: {
        88: '22rem',
        104: '26rem',
        112: '28rem',
        128: '32rem',
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': {
            transform: 'translateY(-6%)',
            animationTimingFunction: 'cubic-bezier(0.5,0,0,0)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0.5,0,0,0)',
          },
        },
      },
      animation: {
        'bounce-slow': 'bounceSlow 2s infinite',
      },
    },
  },
  plugins: [],
};
