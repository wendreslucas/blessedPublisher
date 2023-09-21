import React, { Fragment } from 'react';
import { TextField, Button } from '@mui/material';
import withStyles, { WithStyles } from '@mui/styles/withStyles';
import FormDialog from '../../../shared/components/FormDialog';
import ButtonCircularProgress from '../../../shared/components/ButtonCircularProgress';

const styles = (theme: any) => ({
	link: {
		transition: theme.transitions.create(['background-color'], {
			duration: theme.transitions.duration.complex,
			easing: theme.transitions.easing.easeInOut,
		}),
		cursor: 'pointer',
		color: theme.palette.primary.main,
		'&:enabled:hover': {
			color: theme.palette.primary.dark,
		},
		'&:enabled:focus': {
			color: theme.palette.primary.dark,
		},
	},
});

interface RegisterDialogProps extends WithStyles<typeof styles> {
	theme: any;
	onClose: () => void;
	openTermsDialog: () => void;
	status: string | null;
	setStatus: (status: string | null) => void;
}

function RegisterDialog(props: RegisterDialogProps) {
	const { setStatus, onClose, status } = props;

	return (
		<FormDialog
			loading={false}
			onClose={onClose}
			open
			headline="Registrar"
			hideBackdrop
			hasCloseIcon
			content={
				<Fragment>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Nome"
						autoFocus
						autoComplete="off"
						type="text"
						FormHelperTextProps={{ error: true }}
						name="name"
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						error={status === 'invalidEmail'}
						label="Endereço de e-mail"
						autoFocus
						autoComplete="off"
						type="email"
						onChange={() => {
							if (status === 'invalidEmail') {
								setStatus(null);
							}
						}}
						FormHelperTextProps={{ error: true }}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Telefone"
						autoFocus
						autoComplete="off"
						type="tel"
						FormHelperTextProps={{ error: true }}
					/>
				</Fragment>
			}
			actions={
				<Button
					type="submit"
					fullWidth
					variant="contained"
					size="large"
					color="secondary"
					disabled={false}
				>
					Registrar
					{false && <ButtonCircularProgress />}
				</Button>
			}
		/>
	);
}

export default withStyles(styles, { withTheme: true })(RegisterDialog);
