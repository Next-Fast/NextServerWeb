export const UseLoginInfoStore = defineStore('loginInfo', () => {
    const hasLogin = ref(false)
    const token = ref('')
    const expireTime = ref(Date.now())

    return {
        hasLogin,
        token,
        expireTime
    }
})