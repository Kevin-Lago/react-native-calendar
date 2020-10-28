import React from 'react';
import { StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

class Fox extends React.Component {
	render() {
		return (
			<Svg style={styles.fox} width="100%" height="100%">
				<Path
					fill="none"
					transform="matrix(1.76595673482063 0 0 1.65709102539608 0 8.4703055042366)"
					stroke="rgba(0,0,0,0.2)"
					strokeWidth="5.28"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M0.284537 195.054C5.3111 194.716 7.69644 193.892 10.7193 192.583C16.7452 189.236 19.6011 183.477 21.1541 178.065C23.0872 169.39 24.9224 162.101 26.6596 156.198C32.2677 138.154 33.2007 135.212 35.8228 127.754C43.2397 108.574 56.4991 102.683 69.513 87.5937C66.4577 88.763 62.601 89.5707 57.9429 90.0169L75.3538 70.5687L54.0028 77.2445C56.9069 66.3719 58.4174 53.6448 56.3953 32.1283C53.8767 18.1413 50.8512 8.5006 42.7237 0C24.9603 12.9136 15.9364 35.2805 10.2537 45.7999C6.46524 52.8128 3.04734 56.5724 0 57.0789" />
				<Path
					fill="none"
					transform="translate(5.221776075, 179.492902651199)"
					stroke="rgba(0,0,0,0.2)"
					strokeWidth="9.6"
					strokeLinecap="round"
					strokeLinejoin="bevel"
					d="M0 13.824C11.3309 3.01426 24.3637 -2.56172 40.4144 1.14428" />
			</Svg>
		)
	}

};

const styles = StyleSheet.create({
	fox: {
		position: "absolute",
		top: "50%",
		zIndex: 0,
		height: "100%",
		width: "100%"
	}
})

export default Fox;
