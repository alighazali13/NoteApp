export type TToken = {
    refreshToken: string;
    accessToken: string;
};

export type TAccount = {
    account_id: string;
    username: string;
    email: string;
    last_login: Date;
};

export type TSignUpCredential = {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
};

export type TSignUpResponse = {
    message: string;
    token: string;
    username: string;
};

export type TSignInCredential = {
    username: string;
    password: string;
};

export type TSignInResponse = {
    message: string;
    token: TToken;
    account: TAccount;
};
