import React from 'react'

const CardCategory = ({category}) => {

    return (
        <div className="max-w-sm sm:w-full inline-block rounded overflow-hidden shadow-lg mr-6 mt-4">
           <a href={`/challenges?cat=${category.categoryClass}`}>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{category.categoryName}</div>
                    <p className="text-gray-700 text-base">
                        {category.categoryDescription}
                    </p>
                </div>
                <div class="px-6 py-4">
                    {category.tags.map(tag => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
                    ))}
                    
                </div>
           </a>
        </div>
    )
}

export default CardCategory