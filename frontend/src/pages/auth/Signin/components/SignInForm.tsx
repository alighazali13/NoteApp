import { useForm, type SubmitHandler } from "react-hook-form";
import { data, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../../components/ui/input";
import { HiLockClosed, HiUser } from "react-icons/hi";
import SwitchLink from "../../../../components/ui/switchlink";
import Button from "../../../../components/ui/button";
import { Form } from "../../../../components/ui/form";
import Alert from "../../../../components/ui/alert";
import { apiSignIn } from "../../../../services/AuthService";
import { useState } from "react";
import type { TToken } from "../../../../@types/auth";

const SignInSchema = z.object({
    username: z
        .string({ required_error: "Username required !" })
        .min(3,{ message: "Username need 3 character(s) ." }),
    password: z
        .string({ required_error: "Password required !" })
        .min(8, { message: "Password need 8 character(s) ." }),
});

type FormFields = z.infer<typeof SignInSchema>;

function SignInForm() {
    const [msgType, setMsgType] = useState<"success" | "error">("success");
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        defaultValues: {},
        resolver: zodResolver(SignInSchema),
    });
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            const result = await apiSignIn(data);
            const {accessToken, refreshToken} :TToken = result.data.token;
            localStorage.setItem("accessToken", accessToken)
            localStorage.setItem("refreshToken", refreshToken)
            setMsgType("success")
            setError("root", {
                message: result.data.msg
            });
            setTimeout(() => {
                navigate("/notes");
            }, 1000)

        } catch (error : any) {
           setMsgType("error")
           if (error.response && error.response.data) {
                setError("root", {
                    message: error.response.data.msg,
                });
           }else {
                setError("root",{
                    message: "Something went wrong! Try again."
                })
           }
        }
    };

    return (
        <>
            <div className="absolute top-3 flex flex-col w-full gap-1">
                {errors.username && (
                    <Alert variant="error" message={errors.username.message} />
                )}
                {errors.password && (
                    <Alert variant="error" message={errors.password.message} />
                )}
                {errors.root && (
                    <Alert variant={msgType} message={errors.root.message} />
                )}
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    icon={<HiUser />}
                    placeholder="Username or E-mail"
                    id="username"
                    type="text"
                    autoComplete="off"
                    {...register("username")}
                />

                <Input
                    icon={<HiLockClosed />}
                    placeholder="Password"
                    id="password"
                    type="password"
                    autoComplete="off"
                    {...register("password")}
                />

                <SwitchLink
                    wrapperClassName="w-full flex justify-end text-[#485348] underline -mt-4"
                    linkClassName="text-[#293028] underline"
                    address="/reset_password"
                    addressText="Forget password?"
                />
                <Button
                    text={isSubmitting ? "Loading..." : "Sign in"}
                    type="submit"
                    disabled={isSubmitting}
                />

                <div className="absolute -bottom-2.5 left-[45%] text-[#8a8985] bg-[#f9f8f4] w-[2rem] text-center">
                    <span className="">or</span>
                </div>
            </Form>
        </>
    );
}

export default SignInForm;
