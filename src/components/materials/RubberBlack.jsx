import { folder, useControls } from 'leva'

export default function RubberBlack(props) {
    const { color, roughness } = useControls('materials', {
        'rubberBlack': folder({
            color: '#272727',
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
        roughness={ roughness }
        envMapIntensity={props.envMapIntensity}/>
}