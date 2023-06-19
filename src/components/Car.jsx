import { useGLTF } from "@react-three/drei";

export default function Car() {
    const model = useGLTF('./glb/s2000.glb')

    return <primitive object={ model.scene } receiveShadow/>
}