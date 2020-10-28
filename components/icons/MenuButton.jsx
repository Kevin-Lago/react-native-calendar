import React from 'react';
import { Svg, Rect } from 'react-native-svg';

class MenuButton extends React.Component {
	render() {
		return (
			<Svg width="72" height="72">
				<Rect fill="#000000" x="10%" y="20%" width="80%" height="10%" />
				<Rect fill="#000000" x="10%" y="45%" width="80%" height="10%" />
				<Rect fill="#000000" x="10%" y="70%" width="80%" height="10%" />
			</Svg>
		)
	}

};

export default MenuButton;