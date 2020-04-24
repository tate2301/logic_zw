import React, { Component } from 'react'
import '../styles.global.scss'
import Axios from 'axios'

class Login extends Component {

    _Register = (e) => {
        e.preventDefault()
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        Axios.post('/api/auth/login', data)
        .then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
        
    }

    render() {
        return(
            <>
                   <main>
                    <section className="absolute w-full h-full">
                        <div
                        className="absolute top-0 w-full h-full bg-gray-900"
                        style={{backgroundImage:" url(../img/register_bg_2.png)", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}
                        ></div>
                        <div className="container mx-auto px-4 h-full">
                        <div className="flex content-center items-center justify-center h-full">
                            <div className="w-full lg:w-4/12 px-4">
                            <div
                                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
                            >
                                
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form onSubmit={this._Register}>
                                    <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        for="grid-password"
                                        >Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                        placeholder="Username"
                                        style={{transition: "all 0.15s ease 0s"}}
                                    />
                                    </div>
                                    <div className="relative w-full mb-3">
                                    <label
                                        name="password"
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        for="grid-password"
                                        >Password</label
                                    ><input
                                        type="password"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                        placeholder="Password"
                                        style={{transition: "all 0.15s ease 0s"}}
                                    />
                                    </div>
                                    <div>
                                    <label className="inline-flex items-center cursor-pointer"
                                        ><input
                                        id="customCheckLogin"
                                        type="checkbox"
                                        className="form-checkbox text-gray-800 ml-1 w-5 h-5"
                                        style={{transition: "all 0.15s ease 0s"}}
                                        /><span className="ml-2 text-sm font-semibold text-gray-700"
                                        >Remember me</span
                                        ></label
                                    >
                                    </div>
                                    <div className="text-center mt-6">
                                    <button
                                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                        type="button"
                                        style={{transition: "all 0.15s ease 0s"}}
                                    >
                                        Sign In
                                    </button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-6">
                                <div className="w-1/2">
                                <a href="#pablo" className="text-gray-300"
                                    ><small>Forgot password?</small></a
                                >
                                </div>
                                <div className="w-1/2 text-right">
                                <a href="#pablo" className="text-gray-300"
                                    ><small>Create new account</small></a
                                >
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}


export default Login