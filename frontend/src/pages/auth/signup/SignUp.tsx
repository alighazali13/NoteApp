import logo from "../../../assets/icons8-sticky-notes-cloud/icons8-sticky-notes-200.png";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import SwitchLink from "../../../components/ui/switchlink";
import SignUpForm from "./components/SignUpForm";

function SignUp() {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen w-full px-8 bg-[#f9f8f4] overflow-y-auto">
                <div className="h-[10rem] w-[10rem]">
                    <img className="w-full h-full" src={logo} alt="" />
                </div>
                <div className="h-[4rem] w-full text-[#2b332a] text-center text-xl font-semibold mb-10">
                    <h2>Your journey starts here</h2>
                    <h2>Take the first step</h2>
                </div>
                <SignUpForm />
                <div className="text-[#2f3b2d] flex my-8 gap-10 text-3xl">
                    <FaFacebook />
                    <FaApple />
                    <FaGoogle />
                </div>
                <SwitchLink
                    wrapperClassName="text-[#5b5e57] mt-10"
                    linkClassName="text-[#293028] underline"
                    text="Already have an account?"
                    address="/signin"
                    addressText="Sign in"
                />
            </div>
        </>
    );
}

export default SignUp;
