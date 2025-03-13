import { Button, Input, List, Select } from '@telegram-apps/telegram-ui';
import { useState } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom'; // Импорт useNavigate

import { ProtectedPage } from '@/components/ProtectedPage.tsx';
import { useMutation, useQuery } from '@tanstack/react-query';

import { addDriver } from '@/api/driver.ts';
import { getCompanyList } from '@/api/company.ts';

export const AddDriverPage: FC = () => {
    const [inn, setInn] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [status, setStatus] = useState<'default' | 'error' | 'focused'>('focused');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate(); // Инициализируем useNavigate

    const { data, isLoading } = useQuery({
        queryKey: ['company_list'],
        queryFn: () => getCompanyList(),
    });

    const mutation = useMutation({
        mutationFn: async (params: { inn: string; name: string; surname: string }) => {
            return await addDriver(params);
        },
        onSuccess: () => {
            setStatus('default');
            setErrorMessage('');
            navigate('/my-driver'); // Редирект на страницу успеха
        },
        onError: (error: any) => {
            setStatus('error');
            setErrorMessage(error.message || 'Произошла ошибка');
        },
    });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!inn.trim()) {
            setStatus('error');
            setErrorMessage('ИНН не может быть пустым');
            return;
        }

        setStatus('default');
        mutation.mutate({ inn, name, surname });
    };

    return (
        <ProtectedPage back={true}>
            <form onSubmit={onSubmit}>
                <List
                    style={{
                        // width: 240,
                        background: 'var(--tgui--secondary_bg_color)',
                    }}
                >
                    <Select header="Select">{data?.map((item) => <option>{item.name}</option>)}</Select>
                    <Input
                        name="inn"
                        required
                        minLength={10}
                        maxLength={12}
                        header="ИНН"
                        type={'number'}
                        placeholder="Введите ИНН"
                        value={inn}
                        onChange={(e) => {
                            setInn(e.target.value);
                            setStatus('default'); // Сбрасываем ошибку при вводе
                            setErrorMessage('');
                        }}
                        status={status}
                    />
                    <Input
                        name="name"
                        required
                        minLength={2}
                        maxLength={12}
                        header="Имя"
                        type={'text'}
                        placeholder="Введите имя"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setStatus('default'); // Сбрасываем ошибку при вводе
                            setErrorMessage('');
                        }}
                        status={status}
                    />
                    <Input
                        name="surname"
                        required
                        minLength={2}
                        maxLength={12}
                        header="Фамилия"
                        type={'text'}
                        placeholder="Введите фамилию"
                        value={surname}
                        onChange={(e) => {
                            setSurname(e.target.value);
                            setStatus('default'); // Сбрасываем ошибку при вводе
                            setErrorMessage('');
                        }}
                        status={status}
                    />
                    {errorMessage && <div style={{ color: 'red', marginTop: '5px' }}>{errorMessage}</div>}

                    <Button mode="filled" size="s" type="submit" disabled={mutation.isPending}>
                        {mutation.isPending ? 'Отправка...' : 'Отправить заявку'}
                    </Button>
                </List>
            </form>
        </ProtectedPage>
    );
};
