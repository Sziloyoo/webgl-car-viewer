import { useGLTF, Grid } from "@react-three/drei"
import { folder, useControls } from "leva"

export default function Studio(){
    const { nodes } = useGLTF('./glb/studio.glb')

    const gridOptions = useControls('studio', {
        'grid': folder({
            gridSize: [ 10, 10 ],
            cellSize: { value: 1, min: 0, max: 10, step: 0.1 },
            cellThickness: { value: 0.75, min: 0, max: 5, step: 0.1 },
            cellColor: '#535353',
            sectionSize: { value: 5, min: 0, max: 10, step: 0.1 },
            sectionThickness: { value: 1, min: 0, max: 5, step: 0.1 },
            sectionColor: '#535353',
            fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
            fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
            followCamera: false,
            infiniteGrid: true
        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    return<group position={[0, -1, 0]}>
        <mesh geometry={ nodes.studio_background.geometry }>
          <meshBasicMaterial color='#383838' />
        </mesh>

        <Grid position={ [ 0, 1, 0 ] } args={ gridOptions.gridSize } { ...gridOptions } />

        {/* <mesh geometry={ nodes.studio_grid.geometry }>
          <meshBasicMaterial color="gray"/>
        </mesh> */}
    </group>
}