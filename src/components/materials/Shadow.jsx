import { useTexture } from '@react-three/drei'
import { folder, useControls } from 'leva'

export default function Shadow() {
    const { color, opacity } = useControls('materials', {
        'shadow': folder({
            color: '#000000',
            opacity:{
                value: 1.0,
                min: 0,
                max: 1,
                step: 0.01
            }

        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    const shadowColor = useTexture('./textures/shadow_color.png')
    const shadowAlpha = useTexture('./textures/shadow_opacity.png')

    shadowColor.flipY = false
    shadowAlpha.flipY = false
    
    return <meshStandardMaterial
        color={ color }
        map={ shadowColor }
        alphaMap={ shadowAlpha }
        opacity={ opacity }
        transparent={ true }/>
}