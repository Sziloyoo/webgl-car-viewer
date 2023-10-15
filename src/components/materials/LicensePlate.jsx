import { useTexture } from '@react-three/drei'
import { folder, useControls } from 'leva'

export default function LicensePlate() {
    const { color } = useControls('materials', {
        'licensePlate': folder({
            color: '#ffffff'

        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    const licensePlateColor = useTexture('./textures/license_plate_color.png')
    licensePlateColor.flipY = false
    
    return <meshLambertMaterial
        color={ color }
        map={ licensePlateColor }/>
}