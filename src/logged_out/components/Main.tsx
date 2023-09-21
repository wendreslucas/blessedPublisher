import React, { memo, useState, useEffect, useCallback } from 'react';
import AOS from 'aos/dist/aos';
import { withStyles, createStyles, WithStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import NavBar from './navigation/NavBar';
import Footer from './footer/Footer';
import 'aos/dist/aos.css';
import CookieRulesDialog from './cookies/CookieRulesDialog';
import CookieConsent from './cookies/CookieConsent';
import dummyBlogPosts from '../dummy_data/blogPosts';
import DialogSelector from './register_login/DialogSelector';
import Routing from './Routing';
import smoothScrollTop from '../../shared/functions/smoothScrollTop';

AOS.init({ once: true });

const styles = (theme: Theme) =>
	createStyles({
		wrapper: {
			backgroundColor: theme.palette.common.white,
			overflowX: 'hidden',
		},
	});

interface MainProps extends WithStyles<typeof styles> {}

function Main(props: MainProps) {
	const { classes } = props;
	const [selectedTab, setSelectedTab] = useState<string | null>(null);
	const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
	const [blogPosts, setBlogPosts] = useState<any[]>([]);
	const [dialogOpen, setDialogOpen] = useState<string | null>(null);
	const [isCookieRulesDialogOpen, setIsCookieRulesDialogOpen] =
		useState<boolean>(false);

	const selectHome = useCallback(() => {
		smoothScrollTop();
		document.title = 'Blessed editora';
		setSelectedTab('Home');
	}, []);

	const selectBlog = useCallback(() => {
		smoothScrollTop();
		document.title = 'Blessed - Blog';
		setSelectedTab('Blog');
	}, []);

	// const openLoginDialog = useCallback(() => {
	// 	setDialogOpen('login');
	// 	setIsMobileDrawerOpen(false);
	// }, []);

	const closeDialog = useCallback(() => {
		setDialogOpen(null);
	}, []);

	const openRegisterDialog = useCallback(() => {
		setDialogOpen('register');
		setIsMobileDrawerOpen(false);
	}, []);

	// const openTermsDialog = useCallback(() => {
	// 	setDialogOpen('termsOfService');
	// }, []);

	const handleMobileDrawerOpen = useCallback(() => {
		setIsMobileDrawerOpen(true);
	}, []);

	const handleMobileDrawerClose = useCallback(() => {
		setIsMobileDrawerOpen(false);
	}, []);

	// const openChangePasswordDialog = useCallback(() => {
	// 	setDialogOpen('changePassword');
	// }, []);

	const fetchBlogPosts = useCallback(() => {
		const updatedBlogPosts = dummyBlogPosts.map((blogPost) => {
			let title = blogPost.title;
			title = title.toLowerCase();
			/* Remove unwanted characters, only accept alphanumeric and space */
			title = title.replace(/[^A-Za-z0-9 ]/g, '');
			/* Replace multi spaces with a single space */
			title = title.replace(/\s{2,}/g, ' ');
			/* Replace space with a '-' symbol */
			title = title.replace(/\s/g, '-');
			blogPost.url = `/blog/post/${title}`;
			blogPost.params = `?id=${blogPost.id}`;
			return blogPost;
		});
		setBlogPosts(updatedBlogPosts);
	}, []);

	const handleCookieRulesDialogOpen = useCallback(() => {
		setIsCookieRulesDialogOpen(true);
	}, []);

	const handleCookieRulesDialogClose = useCallback(() => {
		setIsCookieRulesDialogOpen(false);
	}, []);

	useEffect(fetchBlogPosts, []);

	return (
		<div className={classes.wrapper}>
			{!isCookieRulesDialogOpen && (
				<CookieConsent handleCookieRulesDialogOpen={handleCookieRulesDialogOpen} />
			)}
			<DialogSelector
				dialogOpen={dialogOpen}
				onClose={closeDialog}
				openRegisterDialog={openRegisterDialog}
			/>
			<CookieRulesDialog
				open={isCookieRulesDialogOpen}
				onClose={handleCookieRulesDialogClose}
			/>
			<NavBar
				selectedTab={selectedTab}
				selectTab={setSelectedTab}
				openRegisterDialog={openRegisterDialog}
				mobileDrawerOpen={isMobileDrawerOpen}
				handleMobileDrawerOpen={handleMobileDrawerOpen}
				handleMobileDrawerClose={handleMobileDrawerClose}
			/>
			<Routing
				blogPosts={blogPosts}
				selectHome={selectHome}
				selectBlog={selectBlog}
			/>
			<Footer />
		</div>
	);
}

export default withStyles(styles, { withTheme: true })(memo(Main));
