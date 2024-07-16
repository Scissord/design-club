import { FC } from 'react';
import { useAppDispatch } from "@hooks";
import { IconSun, IconMoon } from "@icons";
import { toggleColorMode } from '@store/reducers/themeSlice';

interface ColorModeButtonProps {
	theme: 'light' | 'dark';
}

export const ColorModeButton: FC<ColorModeButtonProps> = ({ theme }) => {
	const dispatch = useAppDispatch();

  return (
		<div 
			className={`${theme === 'light' ? 'border-indigo-950' : 'border-neutral-200'} cursor-pointer p-2 border rounded-lg`} 
			onClick={() => dispatch(toggleColorMode())}
		>
			{theme === 'light' ? <IconMoon/> : <IconSun/>}
		</div>
	)
};
