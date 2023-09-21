import React, { useEffect } from 'react';
import { List, Divider, Paper } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import SubscriptionTable from './SubscriptionTable';
import SubscriptionInfo from './SubscriptionInfo';

const styles = {
	divider: {
		backgroundColor: 'rgba(0, 0, 0, 0.26)',
	},
};

function Subscription(props) {
	const { transactions, classes, openAddBalanceDialog, selectSubscription } =
		props;

	useEffect(selectSubscription, [selectSubscription]);

	return (
		<Paper>
			<List disablePadding>
				<SubscriptionInfo openAddBalanceDialog={openAddBalanceDialog} />
				<Divider className={classes.divider} />
				<SubscriptionTable transactions={transactions} />
			</List>
		</Paper>
	);
}

export default withStyles(styles)(Subscription);
