import { ErrorCode } from '@/api/error-codes.ts';

export class BadRequest extends Error {
    constructor(code: number, message: string = 'Bad request') {
        super(message);

        this.code = code;
    }
    code: ErrorCode;
}

export class InternalError extends Error {
    constructor(message: string = 'Internal error') {
        super(message);
    }
}

export type ApiError = BadRequest | InternalError;

export async function request<T>(path: string, data: object = {}): Promise<T> {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/${path}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (result.status === 201) {
        const r = await result.json();
        console.log(r);
        return r as T;
    } else if (result.status === 400) {
        const { code } = await result.json();

        throw new BadRequest(code);
    } else {
        throw new InternalError();
    }
}
