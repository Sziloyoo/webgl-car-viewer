import { folder, useControls } from 'leva'

export default function PlasticWhite(props) {

    const { color, roughness, metalness } = useControls('materials', {
        'plasticWhite': folder({
            color: '#2a2a2a',
            roughness:{
                value: 0.6,
                min: 0,
                max: 1,
                step: 0.01
            },
            metalness:{
                value: 0.0,
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
        metalness={ metalness }
        envMapIntensity={props.envMapIntensity}
        />
}