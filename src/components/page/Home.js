import React from 'react'
import '../../css/section.css'
import Asteroid from '../asteroid'
import AlertDanger from '../alertDanger'
import Sorting from '../sorting'

export default function section() {
    return (
        <section className="panel panel_outer">
            <div className="panel_sorting sorting sorting_mb">
                <AlertDanger />
                <Sorting />
            </div>
            <Asteroid />
        </section>
    )
}