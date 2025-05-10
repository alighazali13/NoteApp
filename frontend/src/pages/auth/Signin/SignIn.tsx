import bg from "../../../assets/login/bg3.jpeg";
import logo from "../../../assets/icons8-sticky-notes-cloud/icons8-sticky-notes-200.png";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { HiLockClosed, HiUser } from "react-icons/hi";
import Input from "../../../components/ui/input";
import Button from "../../../components/ui/button";
import SwitchLink from "../../../components/ui/switchlink";
import SignInForm from "./components/SignInForm";
import Alert from "../../../components/ui/alert";





function SignIn() {
    

    return (
        <>
            
            <div
                className="flex flex-col justify-center items-center min-h-screen w-full overflow-y-auto bg-center bg-cover"
                style={{
                    background:
                        "linear-gradient(177deg, rgb(36, 64, 41) 0%, rgb(46 69 47) 100%, rgb(46 121 46) 100%)",
                }}
            >
                <div className="flex flex-col justify-center items-center h-[18rem] w-full">
                    <div className="h-[10rem] w-[10rem]">
                        <img className="w-full h-full" src={logo} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-bold stix">
                            Welcome to NOTEAPP
                        </h2>
                        <h3 className="text-md">about your notes</h3>
                    </div>
                </div>
                <div className="relative bg-[#f9f8f4] w-full max-w-[30rem] rounded-t-4xl flex flex-grow flex-col justify-center items-center px-8">
                
                    <div className="text-[#2f3b2f] text-xl font-semibold text-center my-5">
                        <h3>Happy to see you again</h3>
                        <h3>Please sign in</h3>
                    </div>
                    <SignInForm />
                    <div className="text-[#2f3b2d] flex my-8 gap-10 text-3xl">
                        <FaFacebook />
                        <FaApple />
                        <FaGoogle />
                    </div>
                    <SwitchLink
                        wrapperClassName="text-[#5b5e57] mt-10"
                        linkClassName="text-[#293028] underline"
                        text="Don't have an account?"
                        address="/signup"
                        addressText="Sign up"
                    />
                </div>
            </div>
        </>
    );
}

export default SignIn;
