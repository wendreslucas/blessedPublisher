import withStyles from '@mui/styles/withStyles';

const styles = (theme) => ({
	'@global': {
		'*:focus': {
			outline: 0,
		},
		'.text-white': {
			color: theme.palette.common.white,
		},
		'.listItemLeftPadding': {
			paddingTop: `${theme.spacing(1.75)} !important`,
			paddingBottom: `${theme.spacing(1.75)} !important`,
			paddingLeft: `${theme.spacing(4)} !important`,
			[theme.breakpoints.down('md')]: {
				paddingLeft: `${theme.spacing(4)} !important`,
			},
			'@media (max-width:  420px)': {
				paddingLeft: `${theme.spacing(1)} !important`,
			},
		},
		'.container': {
			width: '100%',
			paddingRight: theme.spacing(4),
			paddingLeft: theme.spacing(4),
			marginRight: 'auto',
			marginLeft: 'auto',
			[theme.breakpoints.up('sm')]: {
				maxWidth: 540,
			},
			[theme.breakpoints.up('md')]: {
				maxWidth: 720,
			},
			[theme.breakpoints.up('lg')]: {
				maxWidth: 1170,
			},
		},
		'.row': {
			display: 'flex',
			flexWrap: 'wrap',
			marginRight: -theme.spacing(2),
			marginLeft: -theme.spacing(2),
		},
		'.container-fluid': {
			width: '100%',
			paddingRight: theme.spacing(2),
			paddingLeft: theme.spacing(2),
			marginRight: 'auto',
			marginLeft: 'auto',
			maxWidth: 1370,
		},
		'.lg-mg-top': {
			marginTop: `${theme.spacing(20)} !important`,
			[theme.breakpoints.down('lg')]: {
				marginTop: `${theme.spacing(18)} !important`,
			},
			[theme.breakpoints.down('md')]: {
				marginTop: `${theme.spacing(16)} !important`,
			},
			[theme.breakpoints.down('sm')]: {
				marginTop: `${theme.spacing(14)} !important`,
			},
		},
		'.lg-mg-bottom': {
			marginBottom: `${theme.spacing(20)} !important`,
			[theme.breakpoints.down('lg')]: {
				marginBottom: `${theme.spacing(18)} !important`,
			},
			[theme.breakpoints.down('md')]: {
				marginBottom: `${theme.spacing(16)} !important`,
			},
			[theme.breakpoints.down('sm')]: {
				marginBottom: `${theme.spacing(14)} !important`,
			},
		},
		'.lg-p-top': {
			paddingTop: `${theme.spacing(20)} !important`,
			[theme.breakpoints.down('lg')]: {
				paddingTop: `${theme.spacing(18)} !important`,
			},
			[theme.breakpoints.down('md')]: {
				paddingTop: `${theme.spacing(16)} !important`,
			},
			[theme.breakpoints.down('sm')]: {
				paddingTop: `${theme.spacing(14)} !important`,
			},
		},
		'::-webkit-scrollbar': {
			width: '6px',
		},

		/* Estilizar o polegar (thumb) da scrollbar */
		'::-webkit-scrollbar-thumb': {
			backgroundColor: '#896281',
			borderRadius: '6px',
		},

		/* Estilizar a área de fundo da scrollbar */
		'::-webkit-scrollbar-track': {
			backgroundColor: '#f1f1f1' /* Cor de fundo da área de fundo */,
		},
	},
});

function globalStyles() {
	return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
