import React from 'react'
import { Input, Button, InputGroup, InputRightElement, Link, Divider } from "@chakra-ui/core";
import GoogleButton from 'react-google-button'

const FormRegister = (props) => {

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return(
        <main>
                    <section className="lg:absolute lg:w-full lg:h-auto sm:h-auto sm:w-screen sm:block sm:p-1 lg:flex lg:p-12 lg:justify-center">
                            <div className="sm:w-screen lg:w-1/3 sm:h-screen lg:h-auto bg-white lg:border-2 lg:border-gray-200 rounded">
                                <div className="flex p-4 w-full h-auto">
                                    <div className="w-1/6">
                                        <img className="w-10 h-10 rounded-4" src="https://thumbs.dreamstime.com/b/key-vector-icon-web-secure-access-online-protection-encryption-private-security-flat-sign-yellow-119319910.jpg" alt=""/>
                                    </div>
                                    
                                    <div className="w-4/6">
                                        <h4 className="text-2xl font-medium">Registration</h4>
                                        <p>Create a free account</p>
                                    </div>
                                    <div className="w-1/6 flex items-right">
                                        <p>
                                            {" "}
                                            <Link href="login" className="text-green-500 hover:text-green-500">Login</Link>
                                        </p>
                                    </div>
                                </div>
                                <Divider />
                                <div className="block p-4 ">
                                    <form className="block">
                                        <div className="block">
                                            <Input className="mt-1" variant="filled" name="username" placeholder="Username" autoComplete="off"/>
                                        </div>
                                        <div className="block">
                                            <Input className="mt-1" variant="filled" name="Fullname" placeholder="Full Name" />
                                        </div>
                                        <div className="block">
                                            <Input className="mt-1" variant="filled" name="email_address" placeholder="johndoe@website.com" autoComplete="off" />
                                        </div>
                                        <div className="block">
                                        <InputGroup size="md">
                                            <Input variant="filled"
                                                pr="4.5rem"
                                                type={show ? "text" : "password"}
                                                placeholder="Enter password"
                                            />
                                            <InputRightElement width="4.5rem">
                                                <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                {show ? "Hide" : "Show"}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        </div>
                                        <div className="flex mt-4">
                                            <Button rightIcon="arrow-forward" className="w-full text-center" variant="solid" variantColor="purple">
                                                Register
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                                <Divider />
                                <div className="text-center">
                                    <p className="text-medium">
                                        or
                                    </p>
                                </div>
                                <div className="flex justify-center px-4 py-2">
                                    <GoogleButton type="light" label="Register with Google" />
                                </div>
                                <Divider />
                                <div className="pb-3 text-center px-4 w-full">
                                    <p className="">By creating an account you agree to our<br/><a className="text-green-500 hover:text-green-500" href="/terms_and_conditions">Terms and Conditions</a></p>
                                </div>
                            </div>
                        </section>
                    </main>
    )
}

export default FormRegister