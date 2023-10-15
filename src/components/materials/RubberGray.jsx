import { folder, useControls } from 'leva'

export default function RubberGray() {
    const { color, roughness } = useControls('materials', {
        'rubberGray': folder({
            color: '#2C2C2C',
            roughness:{
                value: 0.3,
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

    return <meshStandardMaterial
        color={ color }
        roughness={ roughness }/>
}