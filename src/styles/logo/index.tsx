import React from 'react';
import logo from '../../assets/logo.png';

interface LogoProps {
	width: number;
	height: number;
	onClick?: () => void;
	title?: string;
}

export const Logo = (props: LogoProps) => {
	const { width, height, onClick, title } = props;
	return (
		<img
			style={{ cursor: 'pointer' }}
			onClick={onClick}
			src={logo}
			width={width}
			height={height}
			alt="logo"
			title={title}
		/>
	);
};
