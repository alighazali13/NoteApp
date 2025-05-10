import { useForm, type SubmitHandler } from "react-hook-form";
import { data } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../../components/ui/input";
import { HiLockClosed, HiUser } from "react-icons/hi";
import SwitchLink from "../../../../components/ui/switchlink";
import Button from "../../../../components/ui/button";
import { Form } from "../../../../components/ui/form";
import Alert from "../../../../components/ui/alert";

const SignInSchema = z.object({
    email: z
        .string({ required_error: "لطفا ایمیل خود را وارد کنید" })
        .email({ message: "email required !" }),
    password: z
        .string({ required_error: "لطفا رمز عبور خود را وارد کنید" })
        .min(8, { message: "password need 8 character(s) ." }),
});

type FormFields = z.infer<typeof SignInSchema>;

function SignInForm() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        defaultValues: {},
        resolver: zodResolver(SignInSchema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((resolver) => setTimeout(resolver, 1000));
            console.log(data);
            throw new Error();
        } catch (error) {
            setError("root", {
                message: "email is already taken!",
            });
        }
    };

    return (
        <>
            <div className="absolute top-3 flex flex-col w-full gap-1">
                {errors.email && (
                    <Alert variant="error" message={errors.email.message} />
                )}
                {errors.password && (
                    <Alert variant="error" message={errors.password.message} />
                )}
                {errors.root && (
                    <Alert variant="error" message={errors.root.message} />
                )}
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    icon={<HiUser />}
                    placeholder="Username or E-mail"
                    id="username"
                    type="text"
                    autoComplete="off"
                    {...register("email")}
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
