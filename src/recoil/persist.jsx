import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: "localStorage",
    Storage: localStorage,
})

export const tokenState = atom({
    key: "tokenState",
    default: "",
    effects_UNSTABLE: [persistAtom]
})