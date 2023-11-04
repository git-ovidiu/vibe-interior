import React from 'react';
import { icons, IconProps } from './icon-data';

const Icon: React.FC<IconProps> = ({ color, name }) => {
	const IconComponent = icons[name];

	return React.cloneElement(IconComponent, { fill: color });
};

export default Icon;
