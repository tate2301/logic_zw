import React, { Component } from 'react'
import NavbarLoggedOut from '../views/navbars/navbar_logged_out'
import './styles.global.scss'
import CardGetStartedHosting from '../views/cards/get_started_hosting_small'
import CardServices from '../views/cards/card_services'
import FooterPagesDefault from '../views/footers/pages_main_footer'
import HeroLandingPage from '../views/banners/hero_landing_page'
import BrowseCategories from '../views/sections/browse_categories'
import BrowseChallengesLandingRow from '../views/sections/browse_challenges_landing_row'
import {Helmet} from 'react-helmet'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navbarShown: false,
      profileDropDownShown: false,
    }
  }

  render () {
    return (
          <>
              <Helmet>
                <title>Logic Challenges: GET RESEARCH DONE</title>
              </Helmet>
            <header>
                <NavbarLoggedOut />
                <HeroLandingPage />
            </header>
              <section>
                <CardServices />
              </section>
              <section>
                <BrowseCategories />
              </section>
              <section>
                <BrowseChallengesLandingRow />
              </section>
              <section>
                <CardGetStartedHosting />
              </section>
              <section>
                <FooterPagesDefault year="2020" tagline="The smart way to get answers to your questions" companyName="Logic Private Limited" />
              </section>
        </>
    )
  }
}

export default Index