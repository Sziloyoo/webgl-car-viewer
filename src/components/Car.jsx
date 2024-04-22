import { useGLTF } from '@react-three/drei'
import Carpaint from './materials/Carpaint.jsx'
import BlackBody from './materials/BlackBody.jsx'
import Chrome from './materials/Chrome.jsx'
import TurnSignalSide from './materials/TurnSignalSide.jsx'
import LicensePlate from './materials/LicensePlate.jsx'
import Mirror from './materials/Mirror.jsx'
import Plastic from './materials/Plastic.jsx'
import Roof from './materials/Roof.jsx'
import RubberBlack from './materials/RubberBlack.jsx'
import RubberGray from './materials/RubberGray.jsx'
import Window from './materials/Window.jsx'
import TailLight from './materials/TailLight.jsx'
import Shadow from './materials/Shadow.jsx'
import LightLines from './materials/LightLines.jsx'
import LightsReflective from './materials/LightsReflective.jsx'
import RearLightRed from './materials/RearLightRed.jsx'
import RearLightClear from './materials/RearLightClear.jsx';
import FrontLightClear from './materials/FrontLightClear.jsx'
import LightGlass from './materials/LightGlass.jsx'
import FrontLightMatcap from './materials/FrontLightMatcap.jsx'
import InteriorBlack from './materials/InteriorBlack.jsx'
import InteriorPlastic from './materials/InteriorPlastic.jsx'
import InteriorSeat from './materials/InteriorSeat.jsx'
import Wheel from './Wheel.jsx'
import PlasticWhite from './materials/PlasticWhite.jsx'

export default function Car(props) {
  const { nodes } = useGLTF('./glb/' + props.model + '/body.glb')

  return <group position={[0, .14, 0]}>
    {/* Body */}
    {nodes.body_blackbody && <mesh geometry={ nodes.body_blackbody.geometry }>
      <BlackBody />
    </mesh>}

    {nodes.body_carpaint && <mesh geometry={ nodes.body_carpaint.geometry }>
      <Carpaint envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_chrome.geometry && <mesh geometry={ nodes.body_chrome.geometry }>
      <Chrome envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_lightGlass && <mesh geometry={ nodes.body_lightGlass.geometry }>
      <LightGlass envMapIntensity={props.envMapIntensity}/>
    </mesh>}
    
    {nodes.body_frontLightClear && <mesh geometry={ nodes.body_frontLightClear.geometry } >
      <FrontLightClear envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_frontLightMatcap && <mesh geometry={ nodes.body_frontLightMatcap.geometry } >
      <FrontLightMatcap />
    </mesh>}
    
    {nodes.body_indicatorLights && <mesh geometry={ nodes.body_indicatorLights.geometry } >
      <TurnSignalSide envMapIntensity={props.envMapIntensity}/>
    </mesh>}
    
    {nodes.body_licensePlate && <mesh geometry={ nodes.body_licensePlate.geometry } >
      <LicensePlate/>
    </mesh>}

    {nodes.body_lightLines && <mesh geometry={ nodes.body_lightLines.geometry } >
      <LightLines/>
    </mesh>}

    {nodes.body_lightsReflective && <mesh geometry={ nodes.body_lightsReflective.geometry } >
      <LightsReflective envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_mirror && <mesh geometry={ nodes.body_mirror.geometry } >
      <Mirror envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_plastic && <mesh geometry={ nodes.body_plastic.geometry } >
      <Plastic envMapIntensity={props.envMapIntensity}/>
    </mesh>}
    
    {nodes.body_rearLightClear && <mesh geometry={ nodes.body_rearLightClear.geometry } >
      <RearLightClear envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_rearLightRed && <mesh geometry={ nodes.body_rearLightRed.geometry } >
      <RearLightRed envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_roof && <mesh geometry={ nodes.body_roof.geometry } >
      <Roof envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_rubberBlack && <mesh geometry={ nodes.body_rubberBlack.geometry } >
      <RubberBlack envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_rubberGray && <mesh geometry={ nodes.body_rubberGray.geometry } >
      <RubberGray envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_window && <mesh geometry={ nodes.body_window.geometry } >
      <Window envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_tailLight && <mesh geometry={ nodes.body_tailLight.geometry } >
      <TailLight envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_shadowCatcher && <mesh geometry={ nodes.body_shadowCatcher.geometry } >
      <Shadow/>
    </mesh>}

    {nodes.interior_black && <mesh geometry={ nodes.interior_black.geometry } >
      <InteriorBlack envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.interior_platic && <mesh geometry={ nodes.interior_platic.geometry } >
      <InteriorPlastic envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.interior_seat && <mesh geometry={ nodes.interior_seat.geometry } >
      <InteriorSeat envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_brakeCalipers && <mesh geometry={ nodes.body_brakeCalipers.geometry } >
      <RubberGray envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {nodes.body_plasticWhite && <mesh geometry={ nodes.body_plasticWhite.geometry } >
      <PlasticWhite envMapIntensity={props.envMapIntensity}/>
    </mesh>}

    {/* Wheels */}
    <Wheel position={nodes.empty_back_wheel_left.position} rotation={nodes.empty_back_wheel_left.rotation} envMapIntensity={props.envMapIntensity} model={props.model}/>
    <Wheel position={nodes.empty_back_wheel_right.position} rotation={nodes.empty_back_wheel_right.rotation} envMapIntensity={props.envMapIntensity} model={props.model}/>
    <Wheel position={nodes.empty_front_wheel_left.position} rotation={nodes.empty_front_wheel_left.rotation} envMapIntensity={props.envMapIntensity} model={props.model}/>
    <Wheel position={nodes.empty_front_wheel_right.position} rotation={nodes.empty_front_wheel_right.rotation} envMapIntensity={props.envMapIntensity} model={props.model}/>
  </group>
}