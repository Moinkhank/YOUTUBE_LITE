import React from "react";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/videoLength";

const SearchResultVideoCard = ({video}) => {
  return (
    <div>
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col">
         <div className="relative flex">
             <img 
             className="h-full w-full object-cover"
             src={video?.thumbnails?.[0]?.url}
             
             />
             {video?.lengthSeconds && (
              <VideoLength time={video?.lengthSeconds} />
             )}
         </div>
      </div>
    </Link>
    </div>
  )
}

export default SearchResultVideoCard
