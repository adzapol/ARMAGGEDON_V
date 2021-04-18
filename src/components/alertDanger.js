import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import asteroids from '../store/asteroidsData'

const alertDanger = observer(function() {
    const [checked, setChecked] = useState(false);
    
    function handleChange(event) {
        setChecked(!checked)

        const sort = [...asteroids.data]

        if (event.target.checked) {
            console.log('true')
            const sort1 = sort.filter(diam => diam.estimated_diameter.meters.estimated_diameter_max >= 15000)
            return [...asteroids.data] = sort1
        } else {
            console.log('false')
            asteroids.data = []
            return asteroids.fetchData()
        }
    }

    return (
        <div>
            <label>
                <input className="sorting__input sorting__input_mr" type="checkbox" checked={checked} onChange={handleChange} />
                Показать только опасные
            </label>
        </div>
    )
})

export default alertDanger