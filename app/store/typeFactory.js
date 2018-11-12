export const typeFactory = value =>
{
    return [
        `${value}_START`,
        `${value}_SUCCESS`,
        `${value}_FAILURE`,
    ]
}