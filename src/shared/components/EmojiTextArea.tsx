import React, { Fragment, useState, useCallback, ChangeEvent } from 'react';
import {
	TextField,
	IconButton,
	Collapse,
	FormHelperText,
	Box,
	Grid,
} from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';
import countWithEmojis from '../functions/countWithEmojis';

// const styles = (theme: Theme): StyleRules => ({
// 	'@global': {
// 		'.emoji-mart-category-label': theme.typography.body1,
// 		'.emoji-mart-bar': { display: 'none !important' },
// 		'.emoji-mart-search input': {
// 			...theme.typography.body1,
// 			...theme.border,
// 		},
// 		'.emoji-mart-search': {
// 			marginTop: `${theme.spacing(1)} !important`,
// 			paddingRight: `${theme.spacing(1)} !important`,
// 			paddingLeft: `${theme.spacing(1)} !important`,
// 			paddingBottom: `${theme.spacing(1)} !important`,
// 		},
// 		'.emoji-mart-search-icon': {
// 			top: '5px !important',
// 			right: '14px !important',
// 			fontSize: 20,
// 		},
// 		'.emoji-mart-scroll': {
// 			height: 240,
// 		},
// 		'.emoji-mart': {
// 			...theme.border,
// 		},
// 	},
// 	floatButtonWrapper: {
// 		position: 'absolute',
// 		bottom: 12,
// 		right: 12,
// 	},
// 	floatButtonSVG: {
// 		color: theme.palette.primary.light,
// 	},
// 	relative: {
// 		position: 'relative',
// 	},
// });

// interface EmojiTextareaProps extends WithStyles<typeof styles> {
// 	theme: Theme;
// 	rightContent?: React.ReactNode;
// 	placeholder?: string;
// 	maxCharacters?: number;
// 	emojiSet: string;
// 	inputClassName?: string;
// 	onChange?: (value: string, characters: number) => void;
// }

function EmojiTextarea(props) {
	const {
		classes,
		rightContent,
		placeholder,
		maxCharacters,
		inputClassName,
		onChange,
	} = props;
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const [characters, setCharacters] = useState(0);

	// const onSelectEmoji = useCallback(
	// 	(emoji) => {
	// 		let _characters;
	// 		let _value = value + emoji.native;
	// 		if (maxCharacters) {
	// 			_characters = countWithEmojis(_value);
	// 			if (_characters > maxCharacters) {
	// 				return;
	// 			}
	// 		}
	// 		if (onChange) {
	// 			onChange(_value, _characters);
	// 		}
	// 		setValue(_value);
	// 		setCharacters(_characters);
	// 	},
	// 	[value, setValue, setCharacters, maxCharacters, onChange]
	// );

	const handleTextFieldChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { value } = event.target;
			let _characters;
			if (maxCharacters) {
				_characters = countWithEmojis(value);
				if (_characters > maxCharacters) {
					return;
				}
			}
			if (onChange) {
				onChange(value, _characters);
			}
			setValue(value);
			setCharacters(_characters);
		},
		[maxCharacters, onChange, setValue, setCharacters]
	);

	const toggleOpen = useCallback(() => {
		setOpen(!open);
	}, [open, setOpen]);

	return (
		<Fragment>
			<Grid spacing={0} container>
				<Grid
					item
					xs={rightContent ? 8 : 12}
					sm={rightContent ? 9 : 12}
					lg={rightContent ? 10 : 12}
					className={classes.relative}
				>
					<TextField
						fullWidth
						multiline
						variant="outlined"
						rows={6}
						onInput={handleTextFieldChange}
						value={value}
						placeholder={placeholder}
						InputProps={{
							classes: {
								notchedOutline: inputClassName ? inputClassName : undefined,
							},
						}}
					/>
					<div className={classes.floatButtonWrapper}>
						<IconButton onClick={toggleOpen} size="large">
							{open ? (
								<CloseIcon color="primary" />
							) : (
								<EmojiEmotionsIcon color="primary" />
							)}
						</IconButton>
					</div>
				</Grid>
				{rightContent && (
					<Grid item xs={4} sm={3} lg={2}>
						{rightContent}
					</Grid>
				)}
			</Grid>
			{maxCharacters && (
				<FormHelperText error={characters >= maxCharacters}>
					{`${characters}/${maxCharacters} characters`}
				</FormHelperText>
			)}
			<Collapse in={open}>
				<Box mt={1}>
					{/* <Picker
            set={emojiSet}
            color={theme.palette.primary.main}
            style={{ width: '100%' }}
            onSelect={onSelectEmoji}
            emojisToShowFilter={emojisToShowFilter}
          /> */}
				</Box>
			</Collapse>
		</Fragment>
	);
}

export default EmojiTextarea;
