import { folder, useControls } from 'leva'

export default function Mirror(props) {
    const { color, roughness, metalness } = useControls('materials', {
        'mirror': folder({
            color: '#f1fbff',
            roughness:{
                value: 0.01,
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