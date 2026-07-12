export const validate = (v) => {
    if (v === 'Привет') {
        throw new Error();
    }
    return true;
};
