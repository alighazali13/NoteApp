import type { TSignInCredential, TSignUpCredential } from "../@types/auth";
import { client } from "./Config";


export async function apiSignUp(data:TSignUpCredential){
    const response = await client.post('account/auth/',{
        email: data.email,
        username: data.username,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        type:'signup'
    })

    return response
}

export async function apiSignIn(data:TSignInCredential){
    const response = await client.post('account/auth/', {
        username: data.username,
        password: data.password,
        type : 'signin'
    })

    return response
}