import React, { Component } from 'react'
import CardChallengeSmall from '../cards/card_challenge_small'
import {theme, ThemeProvider, ColorModeProvider, LightMode} from '@chakra-ui/core'

class BrowseChallengesLandingRow extends Component {

    state = {
        challenges: [{
            categoryName: "The curing of the Marketer",
            challengeSponsor: {
                name: "Team Tachr",
                profile: "teamtachr"
            },
            challengePrizeMoney: 650.00,
            challengeEvaluationMetric: "Creativity",
            challengeDifficulty: "Professional",

        },
        {
            categoryName: "The curing of the Marketer",
            challengeSponsor: {
                name: "Team Tachr",
                profile: "teamtachr"
            },
            challengePrizeMoney: 650.00,
            challengeEvaluationMetric: "Creativity",
            challengeDifficulty: "Professional",
            
        }]
    }

    render() {
        return(
            <ThemeProvider theme={theme}>
                <ColorModeProvider>
                <LightMode>
                    <div className="container mx-auto px-4 py-12">
                        <h3 className="text-2xl text-gray-700">Explore challenges</h3>
                            <div className="block w-full overflow-x-scroll py-4">
                                {this.state.challenges.map(challenge => (
                                    <CardChallengeSmall challenge={challenge} />
                                ))}
                            </div>
                    </div>
                </LightMode>
                </ColorModeProvider>
            </ThemeProvider>
        )
    }
}

export default BrowseChallengesLandingRow