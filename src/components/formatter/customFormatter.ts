export const transforToUpperCase = async(text: string) => {
    let date = 0;
    const lib = await import('moment');
    date = lib.default.now();
    
    return text.toLocaleUpperCase() + ' '+ date;
}
export const transforToLowerCase = (text: string) => {
    return text.toLocaleLowerCase();
}