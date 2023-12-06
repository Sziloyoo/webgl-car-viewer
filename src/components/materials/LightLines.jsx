import { folder, useControls } from 'leva'

export default function LightLines() {
    const { opacity } = useControls('materials', {
        'lightLines': folder({
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

    return <meshLambertMaterial
        color="white"
        transparent={ true }
        opacity={ opacity }/>
}