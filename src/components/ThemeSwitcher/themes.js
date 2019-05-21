const themes = [
 
  {
    name: 'matte-black',
    firstTime: true,
    colorPrimary: '#FFFFFF',
    colorAlternate: '#000000',
    colorHighlight: '#333c46',
    textPrimary: '#FFFFFF',
    navAlpha: 'rgba(72, 85, 100, 0.75)'
  },

 
];

export const getThemes = () => {
  return themes.map((theme) => {
    return {
      name: theme.name,
      firstTime: theme.firstTime,
      colorPrimary: theme.colorPrimary,
      colorAlternate: theme.colorAlternate,
      colorHighlight: theme.colorHighlight,
      bgPrimary: theme.colorAlternate,
      bgAlternate: theme.colorPrimary,
      bgLanding: theme.colorPrimary,
      textPrimary: theme.textPrimary,
      textAlternate: theme.colorAlternate,
      textLanding: theme.colorPrimary,
      parallaxStars: theme.colorPrimary,
      navAlpha: theme.navAlpha
    };
  });
};
