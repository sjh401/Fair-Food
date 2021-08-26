import React, { useEffect, useState } from 'react'
import { getTenIndecies, sortArray } from '../assets/functions';

export default function Home(props) {
    const [ sorted, setSorted ] = useState([])
    const [ ten, setTen ] = useState([]);

    const { allFoods } = props;

    useEffect(() => {
        const limited = getTenIndecies(sorted)
        setTen(limited)
    },[allFoods, sorted])

    useEffect(() => {
        const array = sortArray(allFoods)
        setSorted(array)
    },[allFoods])

    return (
        <div className="food-detail-grid">
            <div className="food-details">
                You've arrived
            </div>
            <div className="food-detail-comments">
                {ten?.map(food => {
                        return (
                            <div key={food?.id}>
                                {food?.name}
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}
