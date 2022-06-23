import { useTexture } from "@react-three/drei";
import React, { useRef } from "react";

export default function MyCoverArt({ ...props }) {
  const group = useRef();
  const url = props.url;
  const texture = useTexture(url);

  return (
    <mesh ref={group} {...props}>
      <planeBufferGeometry attach="geometry" args={[2.2, 2.8]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}
