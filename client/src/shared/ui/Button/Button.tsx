import React, { memo, MouseEvent } from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick: () => void
}

export const Button: React.FC<IButtonProps> = ({ onClick, id, disabled, children }) => {
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		onClick();
	};
	
	return (
		<button onClick={handleClick} disabled={disabled}>{children}</button>
	)
}

