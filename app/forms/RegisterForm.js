import I18n from '@i18n'

export const RegisterForm = [
    {
        type: 'text',
        name: 'name',
        label: I18n.t('Your name'),
        required: true
    },
    {
        type: 'email',
        name: 'email',
        icon: 'at',
        label: I18n.t('E-mail'),
        required: true,
    },
    {
        type: 'password',
        name: 'password',
        icon: 'lock',
        label: I18n.t('Password'),
        required: true,
    },
    {
        type: 'password',
        name: 'password_confirmation',
        icon: 'lock',
        label: I18n.t('Confirm password'),
        required: true,
    }
]