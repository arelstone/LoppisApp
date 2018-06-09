import {
    Toast
} from 'native-base'

export const showToast = ({
    text,
    type = 'default',
    buttonText = "OK!",
    duration = 5000,
}) => {
    Toast.show({
        text,
        buttonText,
        type,
        duration
    })
}