const BASE_URL ='https://user8416411-zs667och.tunnel.vk-apps.com'

export async function login(token: string): Promise<string> {
    const {jwt} = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            Authorization: `tma ${token}`
        },
    }).then(res => res.json());

    return jwt
}

export async function test(): Promise<string> {
    const data= await fetch(`${BASE_URL}/test`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')    }`
        },
    }).then(res => res.text());

    return data
}