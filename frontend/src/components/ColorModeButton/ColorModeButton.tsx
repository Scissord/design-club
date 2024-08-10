import { FC } from 'react';
import { IconSun, IconMoon } from "@icons";
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';

export const ColorModeButton: FC = () => {
  const theme = useAppSelector(selectTheme);

  return (
		<div
			className={`${theme === 'light' ? 'border-indigo-950' : 'border-neutral-200'}`}
		>
			{theme === 'light' ? <IconMoon/> : <IconSun/>}
		</div>
	)
};
