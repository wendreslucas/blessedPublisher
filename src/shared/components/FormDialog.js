import React from 'react';
import { Dialog, DialogContent, Box } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import DialogTitleWithCloseIcon from './DialogTitleWithCloseIcon';
import emailjs from '@emailjs/browser';

const styles = (theme) => ({
	dialogPaper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingBottom: theme.spacing(3),
		minWidth: 420,
	},
	actions: {
		marginTop: theme.spacing(2),
	},
	dialogPaperScrollPaper: {
		maxHeight: 'none',
	},
	dialogContent: {
		paddingTop: 0,
		paddingBottom: 0,
	},
});

function FormDialog(props) {
	const {
		classes,
		open,
		onClose,
		loading,
		headline,
		onFormSubmit,
		content,
		actions,
		hideBackdrop,
	} = props;

	const templateParams = {};

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.send(
				'service_9fwum2w',
				'template_f3yfsci',
				templateParams,
				'aLV7e-AAMdUXfjEOK'
			)
			.then(
				() => (response) => {
					console.log('email enviado', response.status, response.text);
				},
				(error) => {
					console.log(error);
				}
			);
	}
	return (
		<Dialog
			open={open}
			onClose={onClose}
			disableEscapeKeyDown={loading}
			classes={{
				paper: classes.dialogPaper,
				paperScrollPaper: classes.dialogPaperScrollPaper,
			}}
			hideBackdrop={hideBackdrop ? hideBackdrop : false}
		>
			<DialogTitleWithCloseIcon
				title={headline}
				onClose={onClose}
				disabled={loading}
			/>
			<DialogContent className={classes.dialogContent}>
				<form onSubmit={sendEmail}>
					<div>{content}</div>
					<Box width="100%" className={classes.actions}>
						{actions}
					</Box>
				</form>
			</DialogContent>
		</Dialog>
	);
}

export default withStyles(styles, { withTheme: true })(FormDialog);
