import { request } from '@/api/common.ts';

export async function getCompanyById(id: string): Promise<{ id: string; inn: string; name: string }> {
    return request('company.get', { id: id });
}

export async function getCompanyList(): Promise<{ id: string; inn: string; name: string }[]> {
    return request('company.getList');
}

export async function addCompany(options: { inn: string }): Promise<void> {
    return request('company.add', options);
}
