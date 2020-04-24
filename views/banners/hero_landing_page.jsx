import React from 'react'

const HeroLandingPage = (props) => {

    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-desktop">
                        <div className="column is-full-mobile is-half">
                            <div className="container mx-auto py-32">
                                <h1 className="title">
                                    You are your best Researcher
                                </h1>
                                <h2 className="subtitle">
                                The solutions to the world's most pressing problems lies not within coporations but amongst the regular researcher. 
                                </h2>
                            </div>
                        </div>
                        <div className="column is-half is-0-mobile">

                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </section>
    )
}

export default HeroLandingPage