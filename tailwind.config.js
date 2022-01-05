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
        8: '2rem',
        10: '2.5rem',
        13: '3.25rem',
        15: '3.75rem',
        20: '5rem',
        30: '7.5rem',
        40: '10rem',
        60: '15rem',
        80: '20rem',
        100: '25rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        180: '45rem',
        200: '50rem',
        240: '60rem',
      },
      gridTemplateColumns: {
        'features': 'repeat(auto-fit, minmax(200px, 1fr))',
        'card': '1fr',
        'article': 'repeat(auto-fit, minmax(250px, 1fr))',
        'footer': 'minmax(250px, 1fr) 3fr 2fr',
        'footer-mobile': 'minmax(300px, 1fr)',
        'icons': 'repeat(5, 40px)',
        'footerNav': '1fr 3fr', 
        'footerNav-mobile': '1fr' 
      },
      gridTemplateRows: {
        'main-mobile': ' repeat(2, minmax(0, 1fr)) max-content',
        'features': '100px 50px min-content',
        'card': '240px max-content',
        'desc': 'max-content max-content 100px',
        'footerNav': 'repear(3, 30px)',
        'footerNav-mobile': 'repear(6, 30px)'
      },
    },
  },
  plugins: [],
};
