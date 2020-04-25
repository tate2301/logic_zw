import React from 'react'
import {Input, InputGroup, InputRightElement} from '@chakra-ui/core'

const HeroLandingPage = (props) => {

    return (
        <section className="hero bg-purple-700 relative">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-desktop">
                        <div className="column is-full-mobile is-half">
                            <div className="container mx-auto py-32">
                                <h1 className="text-5xl font-bold text-white">
                                    You are your best Researcher
                                </h1>
                                <h2 className="text-lg text-white">
                                The solutions to the world's most pressing problems lies not within coporations but amongst the regular researcher. 
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroLandingPage