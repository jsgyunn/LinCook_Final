import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: "localStorage",
    Storage: localStorage,
})

export const accessTokenState = atom({
    key: "accessTokenState",
    default: "",
    effects_UNSTABLE: [persistAtom]
})

export const refreshTokenState = atom({
    key: "refreshTokenState",
    default: "",
    effects_UNSTABLE: [persistAtom]
})