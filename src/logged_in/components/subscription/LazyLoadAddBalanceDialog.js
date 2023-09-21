import React, { useState, useEffect, Fragment } from 'react';

function LazyLoadAddBalanceDialog(props) {
	const { open, onClose, onSuccess } = props;
	const [AddBalanceDialog, setAddBalanceDialog] = useState(null);
	const [hasFetchedAddBalanceDialog, setHasFetchedAddBlanceDialog] =
		useState(false);

	useEffect(() => {
		if (open && !hasFetchedAddBalanceDialog) {
			setHasFetchedAddBlanceDialog(true);
			import('./AddBalanceDialog').then((Component) => {
				setAddBalanceDialog(() => Component.default);
			});
		}
	}, [
		open,
		hasFetchedAddBalanceDialog,
		setHasFetchedAddBlanceDialog,
		setAddBalanceDialog,
	]);

	return (
		<Fragment>
			{AddBalanceDialog && (
				<AddBalanceDialog
					open={open}
					onClose={onClose}
					onSuccess={onSuccess}
				></AddBalanceDialog>
			)}
		</Fragment>
	);
}

export default LazyLoadAddBalanceDialog;
