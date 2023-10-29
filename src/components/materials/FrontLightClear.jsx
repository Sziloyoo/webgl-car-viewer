import { useTexture } from '@react-three/drei'
import { folder, useControls } from 'leva'

export default function FrontLightClear() {
    const { color } = useControls('materials', {
        'frontLightClear': folder({
            color: '#ffffff'
        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    const normal = useTexture('./textures/turn_signal_glass_normal.png')
    const matcapTexture = useTexture('./textures/matcap_2.png')
    normal.flipY = false

    return <meshMatcapMaterial
        color={ color }
        matcap={ matcapTexture }
        normalMap={ normal }
        normalScale={ 3.0 }/>
}