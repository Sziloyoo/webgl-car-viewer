import { folder, useControls } from 'leva'

export default function InteriorSeat() {
    const { color } = useControls('materials', {
        'interiorSeat': folder({
            color: '#ff4747'
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