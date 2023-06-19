import { Environment } from "@react-three/drei"
import { ACESFilmicToneMapping } from "three"

export default function Background() {

    return <>
        <Environment background near={1} far={1000} resolution={1024} files='./hdri/belfast_sunset_puresky_1k.hdr' blur={0.3} encoding={ACESFilmicToneMapping}/>
    </>
}