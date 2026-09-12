import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const NODE_COUNT = 90;
const CONNECT_DISTANCE = 2.6;
const FIELD_RADIUS = 4.5;

function generateNodes(count, radius) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random());
    positions.push(new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta) * 0.6,
      r * Math.cos(phi) * 0.6
    ));
  }
  return positions;
}

function buildEdges(nodes, maxDistance) {
  const edges = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < maxDistance) {
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

function NeuralNetwork() {
  const groupRef = useRef();
  const pointer = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const autoRotation = useRef(0);

  const nodes = useMemo(() => generateNodes(NODE_COUNT, FIELD_RADIUS), []);
  const edges = useMemo(() => buildEdges(nodes, CONNECT_DISTANCE), [nodes]);

  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(nodes.length * 3);
    nodes.forEach((n, i) => {
      positions[i * 3] = n.x;
      positions[i * 3 + 1] = n.y;
      positions[i * 3 + 2] = n.z;
    });
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [nodes]);

  const linesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(edges.length * 2 * 3);
    edges.forEach(([a, b], i) => {
      positions[i * 6] = nodes[a].x;
      positions[i * 6 + 1] = nodes[a].y;
      positions[i * 6 + 2] = nodes[a].z;
      positions[i * 6 + 3] = nodes[b].x;
      positions[i * 6 + 4] = nodes[b].y;
      positions[i * 6 + 5] = nodes[b].z;
    });
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [nodes, edges]);

  useEffect(() => {
    const handleMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    autoRotation.current += delta * 0.05;
    current.current.x += (pointer.current.y * 0.15 - current.current.x) * 0.03;
    current.current.y += (pointer.current.x * 0.2 - current.current.y) * 0.03;
    groupRef.current.rotation.x = current.current.x;
    groupRef.current.rotation.y = autoRotation.current + current.current.y;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.25} />
      </lineSegments>
      <points geometry={pointsGeometry}>
        <pointsMaterial color="#93c5fd" size={0.07} sizeAttenuation transparent opacity={0.9} />
      </points>
    </group>
  );
}

function NeuralNetworkBackground({ className = '' }) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) return null;

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <NeuralNetwork />
      </Canvas>
    </div>
  );
}

export default NeuralNetworkBackground;
