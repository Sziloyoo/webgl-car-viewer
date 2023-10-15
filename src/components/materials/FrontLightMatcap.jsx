import { useTexture } from '@react-three/drei'
import { folder, useControls } from 'leva'

export default function FrontLightMatcap() {
    const { color } = useControls('materials', {
        'frontLightMatcap': folder({
            color: '#cecece'
        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    const matcapTexture = useTexture('./textures/matcap.png')

    return <meshMatcapMaterial
        color={ color }
        matcap={ matcapTexture }/>
}