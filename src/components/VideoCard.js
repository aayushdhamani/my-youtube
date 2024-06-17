import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount } = statistics;

  if (!thumbnails.maxres?.url) return null;
  return (
    <div className="p-2 m-2 w-[315px] shadow-lg h-[315px]">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails.maxres?.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className=" border border-red-600 ">
      <VideoCard info={info} />
      <p className="px-3 font-bold">Ad Card</p>
    </div>
  );
};

export default VideoCard;
