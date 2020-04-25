import React from 'react'
import { Input, Button, InputGroup, InputRightElement, Link, Checkbox, Divider } from "@chakra-ui/core";
import GoogleButton from 'react-google-button'

const FormLogin = ({_login, _googleLogin}) => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return(
        <main>
                    <section className="lg:absolute lg:w-full lg:h-auto sm:h-auto sm:w-screen sm:block sm:p-1 lg:flex lg:p-12 lg:justify-center">
                            <div className="sm:w-screen lg:w-1/3 sm:h-screen lg:h-auto bg-white lg:border-2 lg:border-gray-200 rounded">
                                <div className="flex p-6 w-full h-autopy-2">
                                    <div className="w-1/6">
                                        <img className="w-10 h-10 rounded-4" src="https://thumbs.dreamstime.com/b/key-vector-icon-web-secure-access-online-protection-encryption-private-security-flat-sign-yellow-119319910.jpg" alt=""/>
                                    </div>
                                    
                                    <div className="w-4/6">
                                        <h4 className="text-2xl font-medium">Login</h4>
                                        <p>Welcome back</p>
                                    </div>
                                    <div className="w-1/6 flex items-right">
                                        <p>
                                            {" "}
                                            <Link href="register" className="text-green-500 hover:text-green-500">Register</Link>
                                        </p>
                                    </div>
                                </div>
                                <Divider />
                                <div className="block p-6">
                                    <form onSubmit={_login} className="block">
                                        <div className="block">
                                            <Input autoComplete="off" className="mt-1" variant="filled" name="email" placeholder="Email" />
                                        </div>
                                        <div className="block">
                                        <InputGroup size="md">
                                            <Input variant="filled"
                                                name="password"
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
                                            <Button type="submit" rightIcon="arrow-forward" className="w-full text-center" variant="solid" variantColor="purple">
                                                Login
                                            </Button>
                                        </div>
                                        <div className="flex justify-between mt-4">
                                            <Checkbox defaultIsChecked variantColor="purple">Remember me</Checkbox>
                                            <Link className="text-blue-600" href="#">Forgot password?</Link>
                                        </div>
                                    </form>
                                </div>
                                <Divider />
                                <div className="flex justify-center px-4 pb-2">
                                    <GoogleButton onClick={_googleLogin} type="light" className="mb-4 w-full" />
                                </div>
                            </div>
                        </section>
                    </main>
    )
}

export default FormLogin