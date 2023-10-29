import { useTexture } from '@react-three/drei'
import { folder, useControls } from 'leva'

export default function RearLightClear() {
    const { color } = useControls('materials', {
        'rearLightClear': folder({
            color: '#ffffff'
            
        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    const normal = useTexture('./textures/back_light_normal.png')
    const matcapTexture = useTexture('./textures/matcap.png')
    normal.flipY = false

    return <meshMatcapMaterial
    color={ color }
    matcap={ matcapTexture }
    normalMap={ normal }/>
}