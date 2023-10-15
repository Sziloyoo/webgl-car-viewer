import { folder, useControls } from 'leva'

export default function InteriorBlack() {
    const { color } = useControls('materials', {
        'interiorBlack': folder({
            color: '#444444'
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