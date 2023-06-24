import React from 'react'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
	const computer = useGLTF('./desktop_pc/scene.gltf')
	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor='black' />
			<pointLight intensity={2} />
			<spotLight position={[-20, 50, 10]} angle={0.12} intensity={1} castShadow />
			<primitive object={computer.scene} scale={isMobile ? 0.6 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.0, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
		</mesh>
	)
}

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		// Add listener for changes to screen size
		const mediaQuery = window.matchMedia('(max-width: 500px)')
		// set init val of 'isMobile' var
		setIsMobile(mediaQuery.matches)

		// define callback func to handle changes to media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches)
		}

		// add callback func as a listener for changes to media query
		mediaQuery.addEventListener('change', handleMediaQueryChange)
		// remove listener when component is unmounted
		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange)
		}
	}, [])

	return (
		<Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}

export default ComputersCanvas