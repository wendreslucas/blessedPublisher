import React from 'react';
import { ListItemText, Button, Toolbar } from '@mui/material';

import withStyles from '@mui/styles/withStyles';

const styles = {
	toolbar: {
		justifyContent: 'space-between',
	},
};

function SubscriptionInfo(props) {
	const { classes, openAddBalanceDialog } = props;
	return (
		<Toolbar className={classes.toolbar}>
			<ListItemText primary="Status" secondary="Premium Account" />
			<Button
				variant="contained"
				color="secondary"
				onClick={openAddBalanceDialog}
				disableElevation
			>
				Add Balance
			</Button>
		</Toolbar>
	);
}

export default withStyles(styles)(SubscriptionInfo);
