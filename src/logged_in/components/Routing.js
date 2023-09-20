import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

import withStyles from '@mui/styles/withStyles';
import Dashboard from './dashboard/Dashboard';
import Posts from './posts/Posts';
import Subscription from './subscription/Subscription';
import PropsRoute from '../../shared/components/PropsRoute';
import useLocationBlocker from '../../shared/functions/useLocationBlocker';

const styles = (theme) => ({
	wrapper: {
		margin: theme.spacing(1),
		width: 'auto',
		[theme.breakpoints.up('xs')]: {
			width: '95%',
			marginLeft: 'auto',
			marginRight: 'auto',
			marginTop: theme.spacing(4),
			marginBottom: theme.spacing(4),
		},
		[theme.breakpoints.up('sm')]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			width: '90%',
			marginLeft: 'auto',
			marginRight: 'auto',
		},
		[theme.breakpoints.up('md')]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			width: '82.5%',
			marginLeft: 'auto',
			marginRight: 'auto',
		},
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			width: '70%',
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
});

function Routing(props) {
	const {
		classes,
		EmojiTextArea,
		ImageCropper,
		Dropzone,
		DateTimePicker,
		pushMessageToSnackbar,
		posts,
		transactions,
		toggleAccountActivation,
		CardChart,
		statistics,
		targets,
		setTargets,
		setPosts,
		isAccountActivated,
		selectDashboard,
		selectPosts,
		selectSubscription,
		openAddBalanceDialog,
	} = props;
	useLocationBlocker();
	return (
		<div className={classes.wrapper}>
			<Routes>
				<Route
					path="/c/posts"
					element={
						<PropsRoute
							component={Posts}
							EmojiTextArea={EmojiTextArea}
							ImageCropper={ImageCropper}
							Dropzone={Dropzone}
							DateTimePicker={DateTimePicker}
							pushMessageToSnackbar={pushMessageToSnackbar}
							posts={posts}
							setPosts={setPosts}
							selectPosts={selectPosts}
						/>
					}
				/>
				<Route
					path="/c/subscription"
					element={
						<PropsRoute
							component={Subscription}
							transactions={transactions}
							pushMessageToSnackbar={pushMessageToSnackbar}
							selectSubscription={selectSubscription}
							openAddBalanceDialog={openAddBalanceDialog}
						/>
					}
				/>
				<Route
					path="/"
					element={
						<Dashboard
							toggleAccountActivation={toggleAccountActivation}
							pushMessageToSnackbar={pushMessageToSnackbar}
							CardChart={CardChart}
							statistics={statistics}
							targets={targets}
							setTargets={setTargets}
							isAccountActivated={isAccountActivated}
							selectDashboard={selectDashboard}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default withStyles(styles, { withTheme: true })(memo(Routing));
