import { useGLTF } from '@react-three/drei'
import Tire from './materials/Tire.jsx'
import Rim from './materials/Rim.jsx'
import Chrome from './materials/Chrome.jsx'
import RubberGray from './materials/RubberGray.jsx'
import BrakeDisc from './materials/BrakeDisc.jsx'

export default function Wheel(props) {
  const { nodes } = useGLTF('./glb/' + props.model + '/wheel.glb')
  
  return <>
    <mesh geometry={ nodes.tire.geometry } position={props.position} rotation={props.rotation}>
      <Tire envMapIntensity={props.envMapIntensity}/>
    </mesh>

    <mesh geometry={ nodes.rim.geometry } position={props.position} rotation={props.rotation}>
      <Rim envMapIntensity={props.envMapIntensity}/>
    </mesh>

    <mesh geometry={ nodes.nuts.geometry } position={props.position} rotation={props.rotation}>
      <Chrome envMapIntensity={props.envMapIntensity}/>
    </mesh>

    {nodes.logo && <mesh geometry={ nodes.logo.geometry } position={props.position} rotation={props.rotation}>
      <RubberGray envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    <mesh geometry={ nodes.brake.geometry } position={props.position} rotation={props.rotation}>
      <BrakeDisc envMapIntensity={props.envMapIntensity}/>
    </mesh>
  </>
}