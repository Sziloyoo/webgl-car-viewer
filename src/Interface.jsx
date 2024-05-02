import useStore from "./stores/useStore.jsx"

export default function Interface(){

    const setCar = useStore((state) => state.setCar)
    const setRotate = useStore((state) => state.setRotate)
    const rotate = useStore((state) => state.rotate)
    const colors = useStore((state) => state.colors)
    const colorIndex = useStore((state) => state.colorIndex)
    const setColorIndex = useStore((state) => state.setColorIndex)
    const background = useStore((state) => state.background)
    const setBackground = useStore((state) => state.setBackground)
    const saveImage = useStore((state) => state.saveImage);

    return <div className="interface">
        <div className="button-container">
            <div className="dropdown-container">
                <select onChange={(e) => setCar(e.target.value)} defaultValue="s2000">
                    <option value="s2000">S2000</option>
                    <option value="civic">Civic</option>
                </select>
                <select onChange={(e) => setColorIndex(e.target.value)} defaultValue={colorIndex}>
                    {colors.map((item, index) => (
                        <option key={index} value={index}>{item.name}</option>
                    ))}
                </select>
                <select onChange={(e) => setBackground(e.target.value)} defaultValue={background}>
                    <option value="studio">Studio</option>
                    <option value="sunrise">Beach</option>
                    <option value="road">Highway</option>
                    <option value="depot">Building</option>
                </select>
                <button className="button-40" onClick={(e) => setRotate(!rotate)}>Rotate {rotate ? 'OFF':'ON'}</button>
                <button className="button-40" onClick={saveImage}>Capture</button>
            </div>
        </div>

        <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '16px', color:'white' }}>Pullai Szilárd | szakdolgozat | 2024.05.02</div>
        </div>
    </div>
}