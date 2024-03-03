export const transforToUpperCase = (text: string): string => {
    return text.toLocaleUpperCase() + ' '+ new Date().getFullYear();
}
export const transforToLowerCase = (text: string): string => {
    return text.toLocaleLowerCase();
}