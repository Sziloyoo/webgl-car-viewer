import { folder, useControls } from 'leva'

export default function Chrome(props) {
    const { color, roughness, metalness } = useControls('materials', {
        'chrome': folder({
            color: '#cecece',
            roughness:{
                value: 0.1,
                min: 0,
                max: 1,
                step: 0.01
            },
            metalness:{
                value: 1,
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