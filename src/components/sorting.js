import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import asteroids from '../store/asteroidsData'

const sorting = observer(function() {
    const [click, setClick] = useState(true)

    function handlerSort() {
        const sortDate = [...asteroids.data]

        if (click) {
            const sortNew = sortDate.sort((a, b) => Math.ceil(a.close_approach_data[0].miss_distance.kilometers) - Math.ceil(b.close_approach_data[0].miss_distance.kilometers))
            setClick(false)
            return [...asteroids.data] = sortNew
        } else {
            const sortNew = sortDate.sort((a, b) => Math.ceil(b.close_approach_data[0].miss_distance.kilometers) - Math.ceil(a.close_approach_data[0].miss_distance.kilometers))
            setClick(true)
            return [...asteroids.data] = sortNew
        }
    }

    return (
        <div className="sorting__range sorting__range_mt">
            <span className="sorting__range_under" onClick={handlerSort}>Расстояние в киллометрах</span>
        </div>
    )
})

export default sorting