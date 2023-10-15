import { folder, useControls } from 'leva'

export default function BlackBody() {
    const { color } = useControls('materials', {
        'blackbody': folder({
            color: '#2e2e2e'

        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    return <meshBasicMaterial
        color={ color }/>
}