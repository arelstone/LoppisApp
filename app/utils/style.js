import colors from './colors'

export const flexContainer = {
	flex: 1,
	width: '100%',
}

export const border = {borderWidth: 1, borderStyle: 'solid', borderColor: 'red'}


export const headerStyle = {
}

export const bigText = {
	fontSize: 14
}
export const boldText = {
	fontWeight: '500'
}

export const smallText = {
	fontSize: 12
}
export const microText = {
	fontSize: 10
}

export const fadedText = {
	color: colors.fadedTextColor
}

export const mb = {
	marginBottom: 10
}

export const navigationStyle = () => {
	return {
		headerStyle: {
			backgroundColor: '#f4511e',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	}
}