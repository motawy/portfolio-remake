import React from 'react'
import Hero from '../hero/hero.component'
import About from '../about/about.component'
import './page.styles.scss'

const Page = () => {
    return (
        <div className="hero-wrapper">
            <Hero />
            <About />
        </div>
    )
}

export default Page
