import { BASE_URL } from '@/api/common.ts';

export async function login(token: string): Promise<string> {
    const { jwt } = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            Authorization: `tma ${token}`,
        },
    }).then((res) => res.json());

    return jwt;
}
