export const UseServerInfoStore = defineStore('serverInfo', () => {
    const Version = ref('')
    const Environment = ref('')
    const IsDev = ref(false)
    
    return {
        Version,
        Environment,
        IsDev,
    }
});

export interface ServerInfo {
    Version : string,
    Environment : string,
    IsDev : boolean,
}