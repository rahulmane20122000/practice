import { compareSync, genSaltSync, hashSync } from 'bcryptjs';


export const createHash = (password: string) => {
    const salt = genSaltSync();

    const hashedPassword = hashSync(password, salt);

    return hashedPassword;
}

export const comparePassword = ( hashedPassword: string,password: string) => {
    return compareSync(hashedPassword, password);
}
