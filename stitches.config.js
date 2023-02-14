import { createStitches } from "@stitches/react";
import { violet, slate } from '@radix-ui/colors';

export const { styled, createTheme, globalCss } = createStitches({
    theme: {
        colors: {
            ...violet,
            ...slate,
        },
        fonts: {
            head: 'Barlow',
            sans: 'system-ui',
            mono: 'JetBrains Mono'
        },
        fontSizes: {
            s: '12px',
            p: '16px',
            h: '40px',
        },
        space: {},
        sizes: {},
        radii: {},
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        borderWidths: {},
        borderStyles: {},
        shadows: {},
        zIndices: {},
        transitions: {},
    }
});

// export const darkTheme = createTheme({ 
//   colors: { 
//     text: "white",
//     background: "#383838",
//   } 
// });

const GlobalStyles = globalCss({
    '@font-face': {
        fontFamily: '$sans',
    },
    html: {
        background: "#1e1e1e",
        color: "#ffffff"
    }
})

//we can declare the styles here or in pages/_app.tsx
GlobalStyles();