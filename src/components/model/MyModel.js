import React, { useEffect, useState } from "react";
import MyCoverArt from "./elements/MyCoverArt";
import MySongText from "./elements/MySongText";
import MySongTextTwo from "./elements/MySongTextTwo";
import { MyVoteIcon, MyHeart, MyTrack, MyZoom } from "..";

export default function MyModel(props) {
  const [scale, setScale] = useState(0.09);
  const data = props.data;

  useEffect(() => {}, [props.selected]);

  return (
    <group>
      <MyCoverArt
        url={data.coverArt.url}
        rotation={data.coverArt.rotation}
        scale={3}
        position={data.coverArt.position}
        onDoubleClick={() => {
          props.set(!props.ready);
          props.setSelected(props.ready ? 0 : data.index);
        }}
      />
      {data.index === 2 ? (
        <MySongTextTwo
          url={data.songText.url}
          rotation={data.songText.rotation}
          scale={3}
          position={data.songText.position}
        />
      ) : (
        <MySongText
          url={data.songText.url}
          rotation={data.songText.rotation}
          scale={3}
          position={data.songText.position}
        />
      )}
      <MyVoteIcon
        rotation={data.voteIcon.rotation}
        scale={0.2}
        position={data.voteIcon.position}
        onDoubleClick={() => props.setVoted(data.index)}
      />
      {props.voted === data.index && (
        <MyHeart
          scale={scale}
          position={data.heartIcon.position}
          rotation={data.heartIcon.rotation}
          onPointerOver={() => setScale(0.1)}
          onPointerOut={() => setScale(0.09)}
        />
      )}
      {props.selected === data.index
        ? props.ready && (
            <group>
              <MyTrack
                scale={4}
                position={data.song.position}
                rotation={data.song.rotation}
                url={data.song.url}
              />
              <MyZoom url={data.song.url} />
            </group>
          )
        : null}
    </group>
  );
}
