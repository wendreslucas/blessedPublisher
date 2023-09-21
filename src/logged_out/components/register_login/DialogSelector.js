import React, { useState, useCallback, Fragment } from 'react';
import RegisterDialog from './RegisterDialog';
import ModalBackdrop from '../../../shared/components/ModalBackdrop';

function DialogSelector(props) {
	const { dialogOpen, onClose } = props;
	const [loginStatus, setLoginStatus] = useState(null);
	const [registerStatus, setRegisterStatus] = useState(null);

	const _onClose = useCallback(() => {
		setLoginStatus(null);
		setRegisterStatus(null);
		onClose();
	}, [onClose, setLoginStatus, setRegisterStatus]);

	const printDialog = useCallback(() => {
		switch (dialogOpen) {
			case 'register':
				return (
					<RegisterDialog
						onClose={_onClose}
						status={registerStatus}
						setStatus={setRegisterStatus}
					/>
				);

			default:
		}
	}, [dialogOpen]);

	return (
		<Fragment>
			{dialogOpen && <ModalBackdrop open />}
			{printDialog()}
		</Fragment>
	);
}

export default DialogSelector;
