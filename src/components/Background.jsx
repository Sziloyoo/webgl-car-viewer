import { Environment } from "@react-three/drei"
import { folder, useControls } from 'leva'

export default function Background() {

    const { height, radius, scale } = useControls('background', {
        'skybox': folder({
            height:{
                value: 20,
                min: 10,
                max: 100,
                step: 0.1
            },
            radius:{
                value: 440,
                min: 100,
                max: 1000,
                step: 1
            },
            scale:{
                value: 10,
                min: 8,
                max: 128,
                step: 1
            }
        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    return <>
        <Environment
        background
        ground={ {
            height: height,
            radius: radius,
            scale: scale
        } }
        files='./environment/sunrise_2k.hdr'
        />
    </>
}