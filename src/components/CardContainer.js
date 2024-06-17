import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utls/constants";
import VideoCard ,{AdVideoCard}from "./VideoCard";
import { Link } from "react-router-dom";

const CardContainer = () => {
  const [videos, setVidoes] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();

    setVidoes(json?.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video?.id}>
          {" "}
          <VideoCard info={video}  />
        </Link>
      ))}
    </div>
  );
};

export default CardContainer;
