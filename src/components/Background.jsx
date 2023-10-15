import { Environment } from "@react-three/drei"
import { ACESFilmicToneMapping } from "three"

export default function Background() {

    return <>
        <Environment
        background
        /* ground={{ height: 32, radius: 130 }} */
        files='./environment/old_depot_2k.hdr'
        near={1}
        far={1000}
        resolution={2048}
        blur={0.0}/>
    </>
}