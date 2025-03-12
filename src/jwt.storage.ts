export function removeJwt(): void {
    localStorage.removeItem('jwt');
}

export function saveJwt(token: string): void {
    localStorage.setItem('jwt', token);
}

export function getJwt(): string | null {
    return localStorage.getItem('jwt');
}
