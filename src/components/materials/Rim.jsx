import { folder, useControls } from 'leva'

export default function Rim() {
    const { color, roughness, metalness } = useControls('materials', {
        'rim': folder({
            color: '#cecece',
            roughness:{
                value: 0.3,
                min: 0,
                max: 1,
                step: 0.01
            },
            metalness:{
                value: 0.5,
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
        roughness={ roughness }
        metalness={ metalness }/>
}