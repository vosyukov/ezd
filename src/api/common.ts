export async function request<T>(path: string, data: object = {}): Promise<T> {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/${path}`, {
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
    console.log(r);
    return r as T;
}
