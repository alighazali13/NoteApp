import type { TSignUpCredential } from "../@types/auth";
import { client } from "./Config";


export async function apiSignUp(data:TSignUpCredential){
    const response = await client.post('account/auth/',{
        email: data.email,
        username: data.username,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
    })

    return response
}