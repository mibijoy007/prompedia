// import React from 'react'

import Feed from "@components/Feed"

const Home = () => {
  return (
    <div>
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Find & Share
        {/* max-md:hidden */}
        <br className="" />
        <span className="orange_gradient">AI-Powered prompts</span>
        </h1>
        <p className="desc text-center">
            Prompedia is an opensource prompting tool to find, share AI prompts & results
        </p>
    </section>
    <Feed/>

    </div>
  )
}

export default Home