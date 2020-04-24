import React from 'react'

const FooterPagesDefault = (props) => {

    return(
        <div className="bg-gray-100">
            <div className="container mx-auto py-12 px-4">
            <div className="columns py-4 is-desktop">
                <div className="column is-full-mobile is-one-third-desktop is-one-third-tablet">
                    
                </div>
                <div className="column is-full-mobile">
                    <div className="columns">
                        <div className="column">
                            <h3 className="text-xl block text-gray-500">GUIDES</h3>
                            <a href="#" className="block">About Us</a>
                            <a href="#" className="block">Blog</a>
                            <a href="#" className="block">Learn</a>
                        </div>
                        <div className="column">
                            <h3 className="text-xl block text-gray-500">COMPANY</h3>
                            <a href="#" className="block">Terms and Conditions</a>
                            <a href="#" className="block">User Agreement</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column text-center">
                    &copy; {props.year + " " + props.companyName}
                </div>
            </div>
        </div>
        </div>
    )
}

export default FooterPagesDefault