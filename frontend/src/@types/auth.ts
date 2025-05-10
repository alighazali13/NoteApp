export type TSignUpCredential = {
    email:string;
    username:string;
    password:string
    passwordConfirm:string
}

export type TSignUpResponse = {
    message: string;
    token:string;
    username:string
}