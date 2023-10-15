import { folder, useControls } from 'leva'

export default function Carpaint() {
    const { color, roughness, metalness, clearcoat, clearcoatRoughness } = useControls('materials', {
        'carpaint': folder({
            color: '#ff0000',
            roughness:{
                value: 0.05,
                min: 0,
                max: 1,
                step: 0.01
            },
            metalness:{
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            },
            clearcoat:{
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            },
            clearcoatRoughness:{
                value: 0.25,
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

    return <meshPhysicalMaterial
        color={ color }
        roughness={ roughness }
        metalness={ metalness }
        clearcoat={ clearcoat }
        clearcoatRoughness={ clearcoatRoughness }/>
}