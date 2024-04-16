"use client";

import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import {
  useCursor,
  Float,
  Environment,
  Text,
  MeshTransmissionMaterial,
  TransformControls,
} from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useControls } from "leva";
gsap.registerPlugin(useGSAP);

export default function Shapes() {
  return (
    <div className="w-full h-full ">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          {/* <ContactShadows
            position={[0, -6, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          /> */}
          <Text fontSize={2.5} fontWeight={900} position={[0, 0, -5]}>
            Jay Ganatra
          </Text>
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  const geometries = [
    {
      position: [0, 0, 0],
      r: 0.5,
      geomerty: new THREE.TorusGeometry(2, 1, 16, 32), // Donut,
    },
  ];
  const materials = [new THREE.MeshNormalMaterial()];

  return geometries.map(({ position, r, geomerty }, index) => (
    <Geomery
      key={index}
      position={position.map((p) => p * 2)}
      geomerty={geomerty}
      materials={materials}
      r={r}
    />
  ));
}

function Geomery({ r, position, geometry, materials }) {
  return (
    // <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
    <Model
      position={[0, 0, 0]}
      rotation={[2, 0, -0]}
      geometry={geometry}
      materials={materials}
    />
    // </Float>
  );
}

function Model({ geometry, materials, ...props }) {
  const meshRef = useRef();

  const [visible, setVisible] = useState(false);
  const startingMaterial = getRandomMaterial();
  const scene = useThree((state) => state.scene);
  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  useGSAP(
    () => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        delay: 0.3,
      });
    },
    { scope: meshRef.current }
  );

  const materialProps = {
    thickness: 0.5,
    roughness: 0,
    transmission: 1,
    ior: 1.4,
    chromaticAberration: 1.4,
    backside: true,
  };
  const modes = ["translate", "rotate", "scale"];
  const [curMode, setMode] = useState(0);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const { contextSafe } = useGSAP({ scope: meshRef.current });

  const handleClick = contextSafe((e) => {
    const mesh = e.object;

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1, 0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  });

  return (
    <>
      <mesh
        ref={meshRef}
        name={"Model"}
        geometry={new THREE.TorusGeometry(2, 1, 16, 32)}
        // material={startingMaterial}
        onClick={handleClick}
        visible={visible}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}
        dispose={null}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <TransformControls
        object={scene.getObjectByName("Model")}
        mode={modes[curMode]}
      />
    </>
  );
}
