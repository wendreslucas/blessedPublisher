import React from 'react';
import { ButtonContainer } from './styles';
import { BsWhatsapp } from '../../../styles/icons';

interface WhatsAppButtonProps {
	phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = () => {
	const handleChatButtonClick = () => {
		const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
		const whatsappURL = `https://wa.me/${phoneNumber}`;

		window.open(whatsappURL, '_blank');
	};

	return (
		<ButtonContainer onClick={handleChatButtonClick}>
			<BsWhatsapp />
		</ButtonContainer>
	);
};

export default WhatsAppButton;
