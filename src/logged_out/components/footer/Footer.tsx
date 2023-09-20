import React from 'react';
import {
	Grid,
	Typography,
	Box,
	IconButton,
	Hidden,
	TextField,
} from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BsFacebook, BsInstagram } from '../../../styles/icons';
import WaveBorder from '../../../shared/components/WaveBorder';

const styles = (theme) => ({
	footerInner: {
		backgroundColor: theme.palette.common.darkBlack,
		paddingTop: theme.spacing(8),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		paddingBottom: theme.spacing(6),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(10),
			paddingLeft: theme.spacing(16),
			paddingRight: theme.spacing(16),
			paddingBottom: theme.spacing(10),
		},
		[theme.breakpoints.up('md')]: {
			paddingTop: theme.spacing(10),
			paddingLeft: theme.spacing(10),
			paddingRight: theme.spacing(10),
			paddingBottom: theme.spacing(10),
		},
	},
	brandText: {
		fontFamily: "'Baloo Bhaijaan', cursive",
		fontWeight: 400,
		color: theme.palette.common.white,
	},
	footerLinks: {
		marginTop: theme.spacing(2.5),
		marginBot: theme.spacing(1.5),
		color: theme.palette.common.white,
	},
	infoIcon: {
		color: `${theme.palette.common.white} !important`,
		backgroundColor: '#33383b !important',
	},
	socialIcon: {
		fill: theme.palette.common.white,
		backgroundColor: '#33383b',
		borderRadius: theme.shape.borderRadius,
		'&:hover': {
			backgroundColor: theme.palette.primary.light,
		},
	},
	link: {
		cursor: 'Pointer',
		color: theme.palette.common.white,
		transition: theme.transitions.create(['color'], {
			duration: theme.transitions.duration.shortest,
			easing: theme.transitions.easing.easeIn,
		}),
		'&:hover': {
			color: theme.palette.primary.light,
		},
	},
	whiteBg: {
		backgroundColor: theme.palette.common.white,
	},
});

const infos = [
	{
		icon: <PhoneIcon />,
		description: '+55 (27) 98841-4007',
	},
	{
		icon: <MailIcon />,
		description: 'sac@ministerioblessed.com.br',
	},
];

const socialIcons = [
	{
		icon: (
			<a
				href="https://www.instagram.com/blessededitora/"
				target="_blank"
				rel="noopener noreferrer"
				style={{ height: '100%' }}
			>
				<BsInstagram color={'#b3294e'} />
				<title>Instagram</title>
			</a>
		),
		label: 'Instagram',
	},
	{
		icon: (
			<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
				<BsFacebook color={'#b3294e'} />
				<title>Facebook</title>
			</a>
		),
		label: 'Facebook',
	},
];

function Footer(props) {
	const { classes, theme } = props;
	const isWidthUpMd = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<footer className="lg-p-top">
			<WaveBorder
				upperColor="#FFFFFF"
				lowerColor={theme.palette.common.darkBlack}
				animationNegativeDelay={4}
			/>
			<div className={classes.footerInner}>
				<Grid container spacing={isWidthUpMd ? 10 : 5}>
					<Grid item xs={12} md={6} lg={4}>
						<form>
							<Box display="flex" flexDirection="column">
								<Box mb={1}>
									<TextField
										variant="outlined"
										multiline
										placeholder="Get in touch with us"
										InputProps={{
											className: classes.whiteBg,
											'aria-label': 'Get in Touch',
										}}
										rows={4}
										fullWidth
										required
									/>
								</Box>
								{/* <ColoredButton
									color={theme.palette.common.white}
									variant="outlined"
									type="submit"
								>
									Send Message
								</ColoredButton> */}
							</Box>
						</form>
					</Grid>
					<Hidden lgDown>
						<Grid item xs={12} md={6} lg={4}>
							<Box display="flex" justifyContent="center">
								<div>
									{infos.map((info, index) => (
										<Box display="flex" mb={1} key={index}>
											<Box mr={2}>
												<IconButton
													className={classes.infoIcon}
													tabIndex={-1}
													disabled
													size="large"
												>
													{info.icon}
												</IconButton>
											</Box>
											<Box display="flex" flexDirection="column" justifyContent="center">
												<Typography variant="h6" className="text-white">
													{info.description}
												</Typography>
											</Box>
										</Box>
									))}
								</div>
							</Box>
						</Grid>
					</Hidden>
					<Grid item xs={12} md={6} lg={4}>
						<Typography variant="h6" paragraph className="text-white">
							Sobre nós
						</Typography>
						<Typography style={{ color: '#8f9296' }} paragraph>
							Somos um ministério que abençoa pessoas através de livros. Temos como
							proposito fazer o nome de Jesus conhecido.
						</Typography>
						<Box display="flex">
							{socialIcons.map((socialIcon, index) => (
								<Box key={index} mr={index !== socialIcons.length - 1 ? 1 : 0}>
									<IconButton
										aria-label={socialIcon.label}
										className={classes.socialIcon}
										size="large"
									>
										{socialIcon.icon}
									</IconButton>
								</Box>
							))}
						</Box>
					</Grid>
				</Grid>
			</div>
		</footer>
	);
}

export default withStyles(styles, { withTheme: true })(Footer);
