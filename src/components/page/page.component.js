import React from 'react'
import Hero from '../hero/hero.component'
import About from '../about/about.component'
import './page.styles.scss'
import Resume from '../resume/resume.component'

const Page = () => {
    return (
        <div className="hero-wrapper">
            <Hero />
            <About />
            <Resume />
        </div>
    )
}

export default Page
