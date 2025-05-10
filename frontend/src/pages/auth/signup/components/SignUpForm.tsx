import { data } from "react-router-dom";
import Input from "../../../../components/ui/input";
import { HiLockClosed, HiMail, HiUser } from "react-icons/hi";
import Button from "../../../../components/ui/button";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../../../components/ui/form";
import Alert from "../../../../components/ui/alert";

const SignUpSchema = z
    .object({
        email: z
            .string({ required_error: "email required !" })
            .email({ message: "invalid email" }),
        username: z
            .string({ required_error: "you must enter username" })
            .min(4, { message: "username need 4 character(s) ." }),
        password: z
            .string({ required_error: "password required !" })
            .min(8, { message: "password need 8 character(s) ." }),
        passwordConfirm: z
            .string({ required_error: "password confirm required !" })
            .min(8, { message: "password need 8 character(s) ." }),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        path: ["passwordConfirm"],
        message: "your password and password confirmation is not as same",
    });

type FormFields = z.infer<typeof SignUpSchema>;

function SignUpForm() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        defaultValues: {},
        resolver: zodResolver(SignUpSchema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((resolver) => setTimeout(resolver, 1000));
            console.log(data);
            throw new Error();
        } catch (error) {
            setError("root", {
                message: "username is already taken",
            });
        }
    };

    return (
        <>
            <div className="absolute top-3 flex flex-col w-full gap-1">
                {errors.email && (
                    <Alert variant="error" message={errors.email.message} />
                )}
                {errors.username && (
                    <Alert variant="error" message={errors.username.message} />
                )}
                {errors.password && (
                    <Alert variant="error" message={errors.password.message} />
                )}
                {errors.passwordConfirm && (
                    <Alert variant="error" message={errors.passwordConfirm.message} />
                )}
                {errors.root && (
                    <Alert variant="error" message={errors.root.message} />
                )}
            </div>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full h-[24rem] max-w-[30rem] flex flex-col gap-5 border-b  border-[#8a8985] relative"
            >
                <Input
                    icon={<HiMail />}
                    placeholder="E-mail"
                    id="email"
                    type="email"
                    autoComplete="off"
                    {...register("email")}
                />
                <Input
                    icon={<HiUser />}
                    placeholder="Username"
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
                <Input
                    icon={<HiLockClosed />}
                    placeholder="Password Confirm"
                    id="passwordConfirm"
                    type="password"
                    autoComplete="off"
                    {...register("passwordConfirm")}
                />
                <Button
                    text={isSubmitting ? "Loading..." : "Sign up"}
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

export default SignUpForm;
