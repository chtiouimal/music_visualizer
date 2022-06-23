import { useFrame } from "@react-three/fiber";
import { suspend } from "suspend-react";
import { createAudio } from "../../utils/CreateAudio";

export default function MyZoom({ url }) {
  // This will *not* re-create a new audio source, suspense is always cached,
  // so this will just access (or create and then cache) the source according to the url
  const { data } = suspend(() => createAudio(url), [url]);
  return useFrame((state) => {
    // Set the cameras field of view according to the frequency average
    state.camera.fov = 75 - data.avg / 15;
    state.camera.updateProjectionMatrix();
  });
}
