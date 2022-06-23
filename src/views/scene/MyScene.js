import { useLoader } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import * as THREE from "three";
import MyModel from "../../components/model/MyModel";
import { musicCollection } from "../../utils/constants/MusicCollections";

export default function MyScene({ setPlaying }) {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Backgrounds%2FMuseum-1.png?alt=media&token=724ccd1e-1647-4325-9888-1ee8e46014ae";

  const [ready, set] = useState(false);
  const [voted, setVoted] = useState(0);
  const [selected, setSelected] = useState(0);
  const texture = useLoader(THREE.TextureLoader, url);
  const data = musicCollection;

  useEffect(() => {
    ready ? setPlaying(true) : setPlaying(false);
  }, [ready, setPlaying]);

  return (
    <mesh>
      <ambientLight intensity={1} />
      <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        side={THREE.BackSide}
      />
      {data.map((e) => (
        <MyModel
          ready={ready}
          set={set}
          setVoted={setVoted}
          voted={voted}
          data={e}
          key={e.index}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </mesh>
  );
}
