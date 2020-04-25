import React from 'react'
import {Button} from '@chakra-ui/core'

const CardChallengeSmall = ({challenge}) => {

    return(
        <div className="md:inline-block md:mr-4 sm:w-full mb-4 md:w-1/3 lg:w-1/4 h-auto border-2 border-gray-200 rounded p-4 shadow-sm">
            <div className="flex w-full h-12 mb-2">
                <div className="w-1/5 h-full">

                </div>
                <div className="w-4/5">
                    <div className="text-md font-bold text-gray-800">
                        <p>{challenge.challengeName || "The curing of the Marketer"}</p>
                    </div>
                    <a href={`app/sponsor/${challenge.challengeSponsor.profile}`}>
                        <div className="text-md text-purple-700">{challenge.challengeSponsor.name}</div>
                    </a> 
                </div>
            </div>
            <div className="flex">
                <p>
                    Difficulty: <span className="text-gray-800 font-medium">{challenge.challengeDifficulty}</span><br/>
                    Category: <span className="text-gray-800 font-medium">{challenge.challengeCategory}</span><br/>
                    Evalution: <span className="text-gray-800 font-medium">{challenge.challengeEvalutionMetric}</span><br/>
                </p>
            </div>
            <div className="block">
                <div className="flex justify-between">
                    <span>Posted 6 days ago</span> 
                    <span>Ends in 2 days</span>
                </div>
            </div>
            <div className="flex justify-between">
                <span className="text-3xl font-bold text-gray-800">${challenge.challengePrizeMoney}</span>
                <Button variant="outline" variantColor="purple">
                    Join
                </Button>
            </div>
        </div>
    )
}

export default CardChallengeSmall