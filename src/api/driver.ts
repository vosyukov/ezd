import { request } from '@/api/common.ts';

export async function getDriverList(): Promise<{ id: string; inn: string; name: string }[]> {
    return request('driver.getList');
}

export async function addDriver(options: { inn: string }): Promise<void> {
    return request('driver.add', options);
}
