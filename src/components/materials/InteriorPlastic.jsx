import { folder, useControls } from 'leva'

export default function InteriorPlastic() {
    const { color } = useControls('materials', {
        'interiorPlastic': folder({
            color: '#737373'
        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    return <meshMatcapMaterial
        color={ color }
        />
}