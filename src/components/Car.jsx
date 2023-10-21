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

export default function Car() {
  const { nodes } = useGLTF('./glb/s2000.glb')
  console.log(nodes.empty_front_wheel_left.rotation)
  console.log(nodes.empty_front_wheel_right.rotation)
  console.log(nodes.empty_back_wheel_left.rotation)
  console.log(nodes.empty_back_wheel_right.rotation)

  return <>
    <mesh geometry={ nodes.body_blackbody.geometry }>
      <BlackBody/>
    </mesh>

    <mesh geometry={ nodes.body_carpaint.geometry }>
      <Carpaint/>
    </mesh>

    <mesh geometry={ nodes.body_chrome.geometry }>
      <Chrome/>
    </mesh>

    <mesh geometry={ nodes.body_lightGlass.geometry }>
      <LightGlass/>
    </mesh>
    
    <mesh geometry={ nodes.body_frontLightClear.geometry }>
      <FrontLightClear/>
    </mesh>

    <mesh geometry={ nodes.body_frontLightMatcap.geometry }>
      <FrontLightMatcap/>
    </mesh>
    
    <mesh geometry={ nodes.body_indicatorLights.geometry }>
      <TurnSignalSide/>
    </mesh>
    
    <mesh geometry={ nodes.body_licensePlate.geometry }>
      <LicensePlate/>
    </mesh>

    <mesh geometry={ nodes.body_lightLines.geometry }>
      <LightLines/>
    </mesh>

    <mesh geometry={ nodes.body_lightsReflective.geometry }>
      <LightsReflective/>
    </mesh>

    <mesh geometry={ nodes.body_mirror.geometry }>
      <Mirror/>
    </mesh>

    <mesh geometry={ nodes.body_plastic.geometry }>
      <Plastic/>
    </mesh>
    
    <mesh geometry={ nodes.body_rearLightClear.geometry }>
      <RearLightClear/>
    </mesh>

    <mesh geometry={ nodes.body_rearLightRed.geometry }>
      <RearLightRed/>
    </mesh>

    <mesh geometry={ nodes.body_roof.geometry }>
      <Roof/>
    </mesh>

    <mesh geometry={ nodes.body_rubberBlack.geometry }>
      <RubberBlack/>
    </mesh>

    <mesh geometry={ nodes.body_rubberGray.geometry }>
      <RubberGray/>
    </mesh>

    <mesh geometry={ nodes.body_window.geometry }>
      <Window/>
    </mesh>

    <mesh geometry={ nodes.body_tailLight.geometry }>
      <TailLight/>
    </mesh>

    <mesh geometry={ nodes.body_shadowCatcher.geometry }>
      <Shadow/>
    </mesh>

    <mesh geometry={ nodes.interior_black.geometry }>
      <InteriorBlack/>
    </mesh>

    <mesh geometry={ nodes.interior_platic.geometry }>
      <InteriorPlastic/>
    </mesh>

    <mesh geometry={ nodes.interior_seat.geometry }>
      <InteriorSeat/>
    </mesh>

    <mesh geometry={ nodes.body_brakeCalipers.geometry }>
      <RubberGray/>
    </mesh>

    {/* Wheels */}
    <Wheel position={nodes.empty_back_wheel_left.position} rotation={nodes.empty_back_wheel_left.rotation}/>
    <Wheel position={nodes.empty_back_wheel_right.position} rotation={nodes.empty_back_wheel_right.rotation}/>
    <Wheel position={nodes.empty_front_wheel_left.position} rotation={nodes.empty_front_wheel_left.rotation}/>
    <Wheel position={nodes.empty_front_wheel_right.position} rotation={nodes.empty_front_wheel_right.rotation}/>
  </>
}