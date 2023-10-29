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

export default function Car(props) {
  const { nodes } = useGLTF('./glb/s2000.glb')
  const position_offset_y = props.position_offset_y

  return <>
    {/* Body */}
    <mesh geometry={ nodes.body_blackbody.geometry }
          position-y={position_offset_y}
          >
      <BlackBody/>
    </mesh>

    <mesh geometry={ nodes.body_carpaint.geometry }
          position-y={position_offset_y}
          >
      <Carpaint/>
    </mesh>

    <mesh geometry={ nodes.body_chrome.geometry }
          position-y={position_offset_y}
          >
      <Chrome/>
    </mesh>

    <mesh geometry={ nodes.body_lightGlass.geometry }
          position-y={position_offset_y}
          >
      <LightGlass/>
    </mesh>
    
    <mesh geometry={ nodes.body_frontLightClear.geometry } >
      <FrontLightClear/>
    </mesh>

    <mesh geometry={ nodes.body_frontLightMatcap.geometry } position-y={position_offset_y}>
      <FrontLightMatcap/>
    </mesh>
    
    <mesh geometry={ nodes.body_indicatorLights.geometry } position-y={position_offset_y}>
      <TurnSignalSide/>
    </mesh>
    
    <mesh geometry={ nodes.body_licensePlate.geometry } position-y={position_offset_y}>
      <LicensePlate/>
    </mesh>

    <mesh geometry={ nodes.body_lightLines.geometry } position-y={position_offset_y}>
      <LightLines/>
    </mesh>

    <mesh geometry={ nodes.body_lightsReflective.geometry } position-y={position_offset_y}>
      <LightsReflective/>
    </mesh>

    <mesh geometry={ nodes.body_mirror.geometry } position-y={position_offset_y}>
      <Mirror/>
    </mesh>

    <mesh geometry={ nodes.body_plastic.geometry } position-y={position_offset_y}>
      <Plastic/>
    </mesh>
    
    <mesh geometry={ nodes.body_rearLightClear.geometry } position-y={position_offset_y}>
      <RearLightClear/>
    </mesh>

    <mesh geometry={ nodes.body_rearLightRed.geometry } position-y={position_offset_y}>
      <RearLightRed/>
    </mesh>

    <mesh geometry={ nodes.body_roof.geometry } position-y={position_offset_y}>
      <Roof/>
    </mesh>

    <mesh geometry={ nodes.body_rubberBlack.geometry } position-y={position_offset_y}>
      <RubberBlack/>
    </mesh>

    <mesh geometry={ nodes.body_rubberGray.geometry } position-y={position_offset_y}>
      <RubberGray/>
    </mesh>

    <mesh geometry={ nodes.body_window.geometry } position-y={position_offset_y}>
      <Window/>
    </mesh>

    <mesh geometry={ nodes.body_tailLight.geometry } position-y={position_offset_y}>
      <TailLight/>
    </mesh>

    <mesh geometry={ nodes.body_shadowCatcher.geometry } position-y={position_offset_y}>
      <Shadow/>
    </mesh>

    <mesh geometry={ nodes.interior_black.geometry } position-y={position_offset_y}>
      <InteriorBlack/>
    </mesh>

    <mesh geometry={ nodes.interior_platic.geometry } position-y={position_offset_y}>
      <InteriorPlastic/>
    </mesh>

    <mesh geometry={ nodes.interior_seat.geometry } position-y={position_offset_y}>
      <InteriorSeat/>
    </mesh>

    <mesh geometry={ nodes.body_brakeCalipers.geometry } position-y={position_offset_y}>
      <RubberGray/>
    </mesh>

    {/* Wheels */}
    <Wheel position={nodes.empty_back_wheel_left.position} rotation={nodes.empty_back_wheel_left.rotation} />
    <Wheel position={nodes.empty_back_wheel_right.position} rotation={nodes.empty_back_wheel_right.rotation} />
    <Wheel position={nodes.empty_front_wheel_left.position} rotation={nodes.empty_front_wheel_left.rotation} />
    <Wheel position={nodes.empty_front_wheel_right.position} rotation={nodes.empty_front_wheel_right.rotation} />
  </>
}