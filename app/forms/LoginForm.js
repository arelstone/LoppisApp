import I18n from '@i18n'

export const LoginForm = [
    {
        type: 'email',
        name: 'email',
        //icon: 'email',
        label: I18n.t('Your e-mail'),
        required: true,
    },
    {
        type: 'password',
        name: 'password',
        //icon: 'lock_open',
        label: I18n.t('Your password'),
        required: true,
    }
]