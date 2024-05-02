import { Environment } from "@react-three/drei"
import { folder, useControls } from 'leva'
import useStore from '../stores/useStore.jsx'

export default function Background() {

    const background = useStore((state) => state.background)

    const { height, radius, scale } = useControls('background', {
        'skybox': folder({
            height:{
                value: 20,
                min: 1,
                max: 128,
                step: 0.1
            },
            radius:{
                value: 440,
                min: 32,
                max: 1024,
                step: 1
            },
            scale:{
                value: 10,
                min: 1,
                max: 512,
                step: 1
            }
        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    const params = {
        'sunrise': {height: 20, radius: 440, scale: 10},
        'road': {height: 6, radius: 128, scale: 8},
        'depot': {height: 12, radius: 64, scale: 10}
    }

    return <>
        <Environment
        background
        ground={ params[background] }
        /* ground={{
            height: height,
            radius: radius,
            scale: scale
        }} */
        files={'./environment/' + background + '.hdr'}
        />
    </>
}