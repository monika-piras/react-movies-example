import React from "react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className='bg-light-green tc db br3 pa3 ma3 bw2 shadow-5'>
      <h3>API from <Link to={"https://www.tvmaze.com/"} target="_blank"
        className="no-underline">TvMaze</Link></h3>
    </div>
  );
}

export default FooterComponent;