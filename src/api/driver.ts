import { request } from '@/api/common.ts';

export async function getDriverById(id: string): Promise<{ id: string; inn: string; name: string }> {
    return request('driver.get', { id });
}

export async function getDriverList(): Promise<{ id: string; inn: string; name: string }[]> {
    return request('driver.getList');
}

export async function addDriver(options: { inn: string }) {
    return request('driver.add', options);
}
