import React, { Fragment } from 'react';
import { Typography, Theme } from '@mui/material';

import { withStyles, WithStyles, createStyles } from '@mui/styles';

const styles = (theme: Theme) =>
	createStyles({
		iconWrapper: {
			borderRadius: theme.shape.borderRadius,
			textAlign: 'center',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginBottom: theme.spacing(3),
			padding: theme.spacing(1.5),
		},
	});

function shadeColor(hex: string, percent: number) {
	const f = parseInt(hex.slice(1), 16);

	const t = percent < 0 ? 0 : 255;

	const p = percent < 0 ? percent * -1 : percent;

	const R = f >> 16;

	const G = (f >> 8) & 0x00ff;

	const B = f & 0x0000ff;

	const newR = Math.round((t - R) * p) + R;
	const newG = Math.round((t - G) * p) + G;
	const newB = Math.round((t - B) * p) + B;

	return `#${((newR << 16) | (newG << 8) | newB).toString(16).padStart(6, '0')}`;
}

interface FeatureCardProps extends WithStyles<typeof styles> {
	Icon: React.ReactElement;
	color: string;
	headline: string;
	text: string;
}

function FeatureCard(props: FeatureCardProps) {
	const { classes, Icon, color, headline, text } = props;
	return (
		<Fragment>
			<div
				className={classes.iconWrapper}
				style={{
					color: color,
					backgroundColor: shadeColor(color, 0.5),
					fill: color,
					padding: 12,
				}}
			>
				{Icon}
			</div>
			<Typography variant="h5" paragraph>
				{headline}
			</Typography>
			<Typography variant="body1" color="textSecondary">
				{text}
			</Typography>
		</Fragment>
	);
}

export default withStyles(styles)(FeatureCard);
