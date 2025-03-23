export async function login(token: string): Promise<string> {
    const { jwt } = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            Authorization: `tma ${token}`,
        },
    }).then((res) => res.json());

    return jwt;
}
