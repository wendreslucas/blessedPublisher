import {
	createTheme,
	responsiveFontSizes,
	adaptV4Theme,
	Theme,
	ThemeOptions,
} from '@mui/material';

// Define the custom color constants
const customColors = {
	black: '#343a40',
	darkBlack: 'rgb(36, 40, 44)',
};

// Other color constants
// const primary = '#b3294e';
const primary = '#CB5C64';
// const secondary = '#4829B2';
const secondary = '#F4DADB';
// const background = "#f5f5f5";
const background = 'black';
const warningLight = 'rgba(253, 200, 69, .3)';
const warningMain = 'rgba(253, 200, 69, .5)';
const warningDark = 'rgba(253, 200, 69, .7)';

// Define breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

// Define spacing
const spacing = 8;

// Create the theme options
const themeOptions: ThemeOptions = {
	palette: {
		primary: { main: primary },
		secondary: { main: secondary },
		// Use customColors directly
		common: customColors,
		warning: {
			light: warningLight,
			main: warningMain,
			dark: warningDark,
		},
		tonalOffset: 0.2,
		background: {
			default: background,
		},
	},
	breakpoints: {
		values: {
			xl,
			lg,
			md,
			sm,
			xs,
		},
	},
	spacing, // Move spacing to the root level
	components: {
		// Place overrides inside the components object
		MuiButton: {
			// Example overrides for MuiButton
			styleOverrides: {
				root: {
					color: 'red',
				},
			},
		},
		// Add more component overrides as needed
	},
	typography: {
		// Typography options here
	},
};

// Create the theme with TypeScript types
const theme: Theme = createTheme(adaptV4Theme(themeOptions));

// Export the responsive font sizes theme
export default responsiveFontSizes(theme);
