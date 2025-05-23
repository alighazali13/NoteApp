import bg from "../../../assets/login/bg3.jpeg";
import logo from "../../../assets/icons8-sticky-notes-cloud/icons8-sticky-notes-200.png";
import Button from "../../../components/ui/button";
import { Link } from "react-router-dom";

function AuthEntry() {
    return (
        <>
            <div
                className="flex flex-col justify-around items-center min-h-screen w-full overflow-y-auto px-10"
                style={{
                    background: 'linear-gradient(90deg,rgba(36, 64, 41, 1) 0%, rgba(81, 122, 83, 1) 100%, rgba(126, 140, 126, 1) 100%)'}}
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
                <div className="flex flex-col justify-center items-center h-[18rem] max-w-[20rem] w-full">
                    <Link className="w-full" to='/signin'>
                        <Button
                            wrapper={true}
                            text="Sign in"
                            wrapperProps={{
                                className: "bg-[#778977]",
                            }}
                        />
                    </Link>
                    <Link className="w-full"  to='/signup'>
                        <Button
                            wrapper={true}
                            text="Create account"
                            wrapperProps={{
                                className: "bg-transparent",
                            }}
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default AuthEntry;
