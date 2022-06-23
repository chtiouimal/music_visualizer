import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import "./App.css";
import { MyControls } from "./components";
import { MyScene } from "./views";

function App() {
  const [playing, setPlaying] = useState(false);

  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 0.1], rotation: [0, 0, 0] }}>
        <MyControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          autoRotate={!playing ? true : false}
          rotateSpeed={-0.5}
        />
        <Suspense callback={null}>
          <MyScene setPlaying={setPlaying} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
