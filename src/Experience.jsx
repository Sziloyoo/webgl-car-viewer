import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Background from './components/Background.jsx'
import Car from './components/Car.jsx'
import Studio from './components/Studio.jsx'
import { useControls } from 'leva'
import useStore from './stores/useStore.jsx'
import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

export default function Experience() {

    const car = useStore((state) => state.car)
    const rotate = useStore((state) => state.rotate)
    const orientation = useStore(state => state.orientation)
    const setOrientation = useStore(state => state.setOrientation)
    const background = useStore(state => state.background)
    const setSaveImage = useStore((state) => state.setSaveImage);
    
    const size = useThree((state) => state.size)
    const camera = useThree((state) => state.camera)

    const { gl } = useThree();

    const handleSaveImage = () => {
        const canvas = gl.domElement
        const imageURI = canvas.toDataURL('image/png')
        const now = new Date();
        const date = `${now.getFullYear()}_${String(now.getMonth() + 1).padStart(2, '0')}_${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}_${String(now.getMinutes()).padStart(2, '0')}_${String(now.getSeconds()).padStart(2, '0')}`;

        const link = document.createElement('a');
        link.download = 'R3F_car_viewer' + date + '.png'
        link.href = imageURI
        link.click()
    }
    setSaveImage(handleSaveImage);

    useEffect(() =>
    {
        setOrientation(size.width < size.height ? 'portrait' : 'landscape')
    }, [ size ])

    useEffect(() =>
    {
        camera.position.multiplyScalar(orientation == 'portrait' ? 2 : 1)
    }, [])

    const {envMapIntensity, dirLightStrength, ambientStrength} = useControls("lighting", {
        envMapIntensity: {value: .6, min: 0.0, max: 1.0},
        dirLightStrength: {value: .75, min: 0.0, max: 1.0},
        ambientStrength: {value: .25, min: 0.0, max: 1.0}
    })

    return <>
        {/* <Perf position="top-left" /> */}

        <OrbitControls autoRotate={rotate} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} zoomSpeed={.6} minDistance={3} maxDistance={8} makeDefault />

        {background != 'studio' && <Background />}
        {background == 'studio' && <Studio />}

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ dirLightStrength } />
        <ambientLight intensity={ ambientStrength } />

        <Car envMapIntensity={envMapIntensity} model={car}/>
    </>
}