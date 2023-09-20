import styled from 'styled-components';

export const ButtonContainer = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;
	background-color: #25d366;
	color: #fff;
	border: none;
	border-radius: 50%;
	width: 60px;
	height: 60px;
	font-size: 24px;
	cursor: pointer;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #128c7e;
	}
`;
