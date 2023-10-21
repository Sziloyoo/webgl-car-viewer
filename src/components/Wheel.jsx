import { useGLTF } from '@react-three/drei'
import Tire from './materials/Tire.jsx'
import Rim from './materials/Rim.jsx'
import Chrome from './materials/Chrome.jsx'
import RubberGray from './materials/RubberGray.jsx'

export default function Wheel(props) {
  const { nodes } = useGLTF('./glb/wheel.glb')

  return <>
    <mesh geometry={ nodes.tire.geometry } position={props.position} rotation={props.rotation}>
      <Tire />
    </mesh>

    <mesh geometry={ nodes.rim.geometry } position={props.position} rotation={props.rotation}>
      <Rim />
    </mesh>

    <mesh geometry={ nodes.nuts.geometry } position={props.position} rotation={props.rotation}>
      <Chrome />
    </mesh>

    <mesh geometry={ nodes.logo.geometry } position={props.position} rotation={props.rotation}>
      <RubberGray />
    </mesh>
  </>
}