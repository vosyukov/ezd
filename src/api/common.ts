export const BASE_URL = 'https://user8416411-74ij3wb3.tunnel.vk-apps.com';

export async function request<T>(path: string, data: object = {}): Promise<T> {
    const result = await fetch(`${BASE_URL}/${path}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (result.status === 400) {
        throw 'err';
    }
    const r = await result.json();

    return r as T;
}
