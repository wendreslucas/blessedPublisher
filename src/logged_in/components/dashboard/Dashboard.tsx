import React, { Fragment, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import SettingsArea from './SettingsArea';
import UserDataArea from './UserDataArea';
import AccountInformationArea from './AccountInformationArea';
import StatisticsArea from './StatisticsArea';

function Dashboard(props) {
	const {
		selectDashboard,
		CardChart,
		statistics,
		toggleAccountActivation,
		pushMessageToSnackbar,
		targets,
		setTargets,
		isAccountActivated,
	} = props;

	useEffect(selectDashboard, [selectDashboard]);

	return (
		<Fragment>
			<StatisticsArea CardChart={CardChart} data={statistics} />
			<Box mt={4}>
				<Typography variant="subtitle1" gutterBottom>
					Sua conta
				</Typography>
			</Box>
			<AccountInformationArea
				isAccountActivated={isAccountActivated}
				toggleAccountActivation={toggleAccountActivation}
			/>
			<Box mt={4}>
				<Typography variant="subtitle1" gutterBottom>
					Configurações
				</Typography>
			</Box>
			<SettingsArea pushMessageToSnackbar={pushMessageToSnackbar} />
			<UserDataArea
				pushMessageToSnackbar={pushMessageToSnackbar}
				targets={targets}
				setTargets={setTargets}
			/>
		</Fragment>
	);
}

export default Dashboard;
