import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Hidden,
	IconButton,
} from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import BookIcon from '@mui/icons-material/Book';
import NavigationDrawer from '../../../shared/components/NavigationDrawer';

const styles = (theme) => ({
	appBar: {
		boxShadow: theme.shadows[6],
		backgroundColor: theme.palette.common.white,
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	menuButtonText: {
		fontSize: theme.typography.body1.fontSize,
		fontWeight: theme.typography.h6.fontWeight,
	},
	brandText: {
		fontFamily: "'Baloo Bhaijaan', cursive",
		fontWeight: 400,
	},
	noDecoration: {
		textDecoration: 'none !important',
	},
});

function NavBar(props) {
	const redirect = () => {
		window.open('https://www.celle.com.br', '_blank');
	};
	const {
		classes,
		openRegisterDialog,
		handleMobileDrawerOpen,
		handleMobileDrawerClose,
		mobileDrawerOpen,
		selectedTab,
	} = props;

	const menuItems = [
		{
			link: '/',
			name: 'Inicio',
			icon: <HomeIcon className="text-white" />,
		},
		{
			link: '/about',
			name: 'Quem somos',
			icon: <BookIcon className="text-white" />,
		},
		{
			name: 'Loja',
			onClick: redirect,
			icon: <LockOpenIcon className="text-white" />,
		},
		{
			name: 'Faça parte',
			onClick: openRegisterDialog,
			icon: <HowToRegIcon className="text-white" />,
		},
	];
	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<div>
						{/* <Logo width={60} height={60} /> */}

						<Typography
							variant="h4"
							className={classes.brandText}
							display="inline"
							color="primary"
						>
							Blessed Editora
						</Typography>
					</div>
					<div>
						<Hidden mdUp>
							<IconButton
								className={classes.menuButton}
								onClick={handleMobileDrawerOpen}
								aria-label="Open Navigation"
								size="large"
							>
								<MenuIcon color="primary" />
							</IconButton>
						</Hidden>
						<Hidden mdDown>
							{menuItems.map((element) => {
								if (element.link) {
									return (
										<Link
											key={element.name}
											to={element.link}
											className={classes.noDecoration}
											onClick={handleMobileDrawerClose}
										>
											<Button
												color="primary"
												size="large"
												classes={{ text: classes.menuButtonText }}
											>
												{element.name}
											</Button>
										</Link>
									);
								}
								return (
									<Button
										color="primary"
										size="large"
										onClick={element.onClick}
										classes={{ text: classes.menuButtonText }}
										key={element.name}
									>
										{element.name}
									</Button>
								);
							})}
						</Hidden>
					</div>
				</Toolbar>
			</AppBar>
			<NavigationDrawer
				menuItems={menuItems}
				anchor="right"
				open={mobileDrawerOpen}
				selectedItem={selectedTab}
				onClose={handleMobileDrawerClose}
			/>
		</div>
	);
}

export default withStyles(styles, { withTheme: true })(memo(NavBar));
