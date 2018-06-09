import {LoginForm} from './LoginForm'
import {RegisterForm} from './RegisterForm'

const fillForm = (formData) => {
    const form = new FormData()
    Object.keys(formData).forEach(key => form.append(key, formData[key]))
    return form
}

export {
    fillForm, LoginForm, RegisterForm
}
