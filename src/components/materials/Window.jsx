import { folder, useControls } from 'leva'

export default function Window() {
    const {transmission, roughness, color, ior, reflectivity} = useControls('materials', {
        'window': folder({
            color: '#ffffff',
            roughness:{
                value: 0.03,
                min: 0,
                max: 1,
                step: 0.01
            },
            transmission:{
                value: 0.95,
                min: 0,
                max: 1,
                step: 0.01
            },
            ior:{
                value: 1.5,
                min: 1.0,
                max: 2.33,
                step: 0.01
            },
            reflectivity:{
                value: 1.0,
                min: 0.0,
                max: 1.00,
                step: 0.01
            }
        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    return <meshPhysicalMaterial
        transparent= { true }
        transmission={ transmission }
        ior={ ior }
        reflectivity={ reflectivity }
        color={ color }
        roughness={ roughness }/>
}