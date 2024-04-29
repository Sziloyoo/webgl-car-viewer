import useStore from "./stores/useStore.jsx"

export default function Interface(){

    const setCar = useStore((state) => state.setCar)
    const setRotate = useStore((state) => state.setRotate)
    const rotate = useStore((state) => state.rotate)

    return <div className="interface">
        {/* Title */}
        <div className="title">Title</div>
        <div className="dropdown-container">
            <select onChange={(e) => setCar(e.target.value)} defaultValue="s2000">
                <option value="s2000">S2000</option>
                <option value="civic">Civic</option>
            </select>
            <button onClick={(e) => setRotate(!rotate)}>Rotate {rotate ? 'OFF':'ON'}</button>
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <div style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '24px', color:'white' }}>Pullai Szilárd | szakdolgozat</div>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '24px', color:'white'}}>05/05/2024</div>
      </div>
    </div>
}