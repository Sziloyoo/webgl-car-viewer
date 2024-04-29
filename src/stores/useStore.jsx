import { create } from 'zustand'

export default create((set) => ({
    car: 's2000', // Default car state
    setCar: (type) => set(() => ({car: type})),
    rotate: false,
    setRotate: (vale) => set(() => ({rotate: vale}))
}))