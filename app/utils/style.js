import colors from './colors'

export const flexContainer = {
    flex: 1,
    width: '100%'
}

export const border = {borderWidth: 1, borderStyle: 'solid', borderColor: 'red'}

export const fadedText = {
    color: colors.fadedTextColor
}


export const smallText = {
    fontSize: 12
}

export const marginR = (x) => ({
    marginRight: x
})

export const navbarButton = {
    ...border,
    paddingHorizontal: 15
}

export const headerStyle = {
    headerStyle: {
        backgroundColor: colors.headerBgColor
    },
    headerTintColor: colors.headerTextColor,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    
}