import { create } from 'zustand'

export default create((set) => ({
    car: 's2000', // Default car state
    setCar: (type) => set(() => ({car: type})),
    rotate: false,
    setRotate: (value) => set(() => ({rotate: value})),
    orientation: window.innerWidth < window.innerHeight ? 'portrait' : 'landscape',
    setOrientation: (orientation) => set(() => { return { orientation: orientation }}),
    colorIndex: 2, // Default color state
    setColorIndex: (num) => set(() => ({colorIndex: num})),
    colors: [
        {
          color: "#683434",
          name: "brown",
        },
        {
          color: "#1a5e1a",
          name: "green",
        },
        {
          color: "#ff0606",
          name: "red",
        },
        {
          color: "#896599",
          name: "mauve",
        },
        {
          color: "#ffa500",
          name: "orange",
        },
        {
          color: "#59555b",
          name: "grey",
        },
        {
          color: "#222222",
          name: "black",
        },
        {
          color: "#ececec",
          name: "white",
        }
      ],
    background: 'studio',
    setBackground: (env) => set(() => ({background: env})),
    saveImage: null,
    setSaveImage: (saveImageFunction) => set({ saveImage: saveImageFunction })
}))