module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    screens: {
      'mobile': '375px',
      'desktop': '1440px',
    },
    spacing: {
      1: '0.5rem',
      2: '0.75rem',
      3: '1rem',
      4: '1.5rem',
      5: '2rem',
      6: '3rem',
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        darkBlue: 'hsl(233, 26%, 24%)',
        limeGreen: 'hsl(136, 65%, 51%)',
        brightCyan: 'hsl(192, 70%, 51%)',
        grayishBlue: 'hsl(233, 8%, 62%)',
        lightGrayishBlue: 'hsl(220, 16%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '20': '5rem',
        '40': '10rem',
        '60': '15rem',
        '80': '20rem',
        '128': '32rem',
        '144': '36rem',
      },
      gridTemplateColumns: {
        'main': 'minmax(auto, 160px) minmax(auto, 500px) 1fr',
      }
    },
  },
  plugins: [],
};
