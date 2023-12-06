import { folder, useControls } from 'leva'

export default function Plastic(props) {
    const { color, roughness } = useControls('materials', {
        'plastic': folder({
            color: '#1D1D1D',
            roughness:{
                value: 0.9,
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
        envMapIntensity={props.envMapIntensity}/>
}