import React from 'react';
import { icons, IconProps } from './icon-data';

const CustomIcon: React.FC<IconProps> = ({ color, name }) => {
	const IconComponent = icons[name];

	return React.cloneElement(IconComponent, { fill: color });
};

export default CustomIcon;
