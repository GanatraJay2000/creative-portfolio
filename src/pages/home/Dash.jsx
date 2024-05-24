import { useRef, Suspense } from "react";
import { Center, Environment, DragControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import * as THREE from "three";

function Dash() {
  const meshRef = useRef();
  const materials = [new THREE.MeshNormalMaterial()];
  const startingMaterial = gsap.utils.random(materials);
  return (
    <DragControls autoTransform>
      <mesh
        ref={meshRef}
        name={"Model"}
        geometry={new THREE.TorusGeometry(2, 1, 16, 32)}
        material={startingMaterial}
        // onClick={handleClick}
        // visible={visible}
        // onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        // onPointerOut={(e) => setHovered(false)}
        dispose={null}
      ></mesh>
    </DragControls>
  );
}

export default function Dashboard() {
  return (
    <div className="h-96">
      <Canvas
        className="z-0 bg-red-100"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Dash />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
