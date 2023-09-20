import React from 'react';
import { Typography, Box, Theme } from '@mui/material';
import { withStyles, WithStyles, createStyles } from '@mui/styles';
import CheckIcon from '@mui/icons-material/Check';

const styles = (theme: Theme) =>
	createStyles({
		card: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
			paddingLeft: theme.spacing(4),
			paddingRight: theme.spacing(4),
			marginTop: theme.spacing(2),
			border: `3px solid ${theme.palette.primary.dark}`,
			borderRadius: theme.shape.borderRadius * 2,
		},
		cardHightlighted: {
			paddingTop: theme.spacing(8),
			paddingBottom: theme.spacing(4),
			paddingLeft: theme.spacing(4),
			paddingRight: theme.spacing(4),
			border: `3px solid ${theme.palette.primary.dark}`,
			borderRadius: theme.shape.borderRadius * 2,
			backgroundColor: theme.palette.primary.main,
			[theme.breakpoints.down('sm')]: {
				marginTop: theme.spacing(2),
			},
		},
		title: {
			color: theme.palette.primary.main,
		},
	});

interface PriceCardProps extends WithStyles<typeof styles> {
	title: string;
	pricing: React.ReactNode | string;
	features: string[];
	highlighted?: boolean;
}

function PriceCard(props: PriceCardProps) {
	const { classes, title, pricing, features, highlighted } = props;

	return (
		<div className={highlighted ? classes.cardHightlighted : classes.card}>
			<Box mb={2}>
				<Typography
					variant={highlighted ? 'h5' : 'h6'}
					className={highlighted ? 'text-white' : classes.title}
				>
					{title}
				</Typography>
			</Box>
			<Box mb={2}>
				<Typography
					variant={highlighted ? 'h3' : 'h4'}
					className={highlighted ? 'text-white' : undefined}
				>
					{pricing}
				</Typography>
			</Box>
			{features.map((feature, index) => (
				<Box display="flex" alignItems="center" mb={1} key={index}>
					<CheckIcon
						style={{
							color: highlighted
								? props.classes.cardHightlighted // Accessing the classes from props
								: props.classes.card, // Accessing the classes from props
						}}
					/>
					<Box ml={1}>
						<Typography
							className={highlighted ? 'text-white' : undefined}
							variant={highlighted ? 'h6' : 'body1'}
						>
							{feature}
						</Typography>
					</Box>
				</Box>
			))}
		</div>
	);
}

export default withStyles(styles)(PriceCard);
