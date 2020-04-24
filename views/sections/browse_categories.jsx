import React, { Component } from 'react'
import CardCategory from '../cards/card_category'

class BrowseCategories extends Component {
    constructor (props) {
        super(props)
        this.state = {
          challengeCategories: [{
            categoryName: "Marketing and Communications",
            categoryDescription: "Help companies realies profits and adopt new customers",
            tags: ['Advanced', 'Professional', 'Legal']
          },
          {
            categoryName: "Business Development",
            categoryDescription: "Help companies realies profits and adopt new customers",
            tags: ['Advanced', 'Professional', 'Legal']
          }]
        }
      }
    render() {
        return(
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-2xl text-gray-700">Explore by category</h2>
                <div className="inline overflow-x-scroll">
                    {this.state.challengeCategories.map(category => (
                        <CardCategory category={category} />
                    ))}
                </div>
            </div>
        )
    }
}

export default BrowseCategories