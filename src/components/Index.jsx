import React from "react"
import Navigation from "./Navigation"
import Homepage from "./Homepage"
import Description from "./Description"
import Portfolio from "./Portfolio"
import WorkProcess from "./WorkProcess"
import CTA from "./CTA"
import Blog from "./Blog"
import WhatIdo from "./WhatIdo"
import HappyClient from "./HappyClient"
import Testimonial from "./Testimonial"
import Contact from "./Contact"
import Footer from "./Footer"
function Index() {
  return (
    <div>
    <Navigation />
    <Homepage />
    <WorkProcess />
    <Portfolio />
    <CTA />
    <Blog />
    <WhatIdo />
    <HappyClient />
    <Testimonial />
    <Contact />
    <Footer />
    </div>
  )
}

export default Index