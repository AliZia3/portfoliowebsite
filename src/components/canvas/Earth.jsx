import React from 'react'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = () => {
	const earth = useGLTF('./planet_earth/scene.gltf')
	return (
		<mesh>
			<ambientLight intensity={1} />
			{/* <directionalLight position={[1, 1, 0]}/>
			<directionalLight position={[-1, 0, 0]}/>
			<directionalLight position={[0, 1, 0]}/>
			<directionalLight position={[0, -1, 0]}/>
			<directionalLight position={[0, 0, 1]}/>
			<directionalLight position={[0, 0, -1]}/> */}

			{/* Spotlights give more flexibility in terms of light intensity compared to directional light */}
			<spotLight position={[5, 0, 0]} />
			<spotLight position={[-5, 0, 0]} />
			<spotLight position={[0, 5, 0]} />
			<spotLight position={[0, -5, 0]} />
			<spotLight position={[0, 0, 5]} />
			<spotLight position={[0, 0, -5]} />
			
			<primitive object={earth.scene} scale={2.5} position={[0,-3.5,0]} />
		</mesh>
		
	)
}

const EarthCanvas = () => {
	return (
		<Canvas camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls autoRotate enableZoom={false} />
				<Earth />
			</Suspense>
		</Canvas>
	)
}

export default EarthCanvas