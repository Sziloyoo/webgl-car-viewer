import { folder, useControls } from 'leva'

export default function LightsReflective(props) {
    const { color, roughness, metalness } = useControls('materials', {
        'lightsReflective': folder({
            color: '#d4d4d4',
            roughness:{
                value: 0.025,
                min: 0,
                max: 1,
                step: 0.01
            },
            metalness:{
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

    return <meshStandardMaterial
        color={ color }
        roughness={ roughness }
        metalness={ metalness }
        envMapIntensity={props.envMapIntensity}/>
}