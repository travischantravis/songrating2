import React from "react";

const TrackSummary = (props) => {
  const { artists, name, popularity, album } = props.track;
  const artistNames =
    artists && artists.map((artist) => artist.name).join(", ");

  return (
    <div className="track-summary">
      {name ? (
        <>
          <h2>
            {`${artistNames} - ${name} `}{" "}
            <span style={{ color: "lightgreen" }}>{popularity}</span>
          </h2>
          <img className="track-image" src={album.images[0].url} alt="" />
        </>
      ) : null}
    </div>
  );
};

export default TrackSummary;
