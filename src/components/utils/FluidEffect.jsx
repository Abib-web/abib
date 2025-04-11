// src/components/utils/FluidEffect.jsx
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

const FluidEffect = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
minHeight: "100vh",

        width: "100vw",
        zIndex: -1,
      }}
    >
      <EffectComposer>
        <Fluid />
      </EffectComposer>
    </Canvas>
  );
};

export default FluidEffect;
