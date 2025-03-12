import { Button, Input, List } from '@telegram-apps/telegram-ui';
import { useState } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom'; // Импорт useNavigate

import { ProtectedPage } from '@/components/ProtectedPage.tsx';
import { useMutation } from '@tanstack/react-query';

import { addCompany } from '@/api/company.ts';

export const AddCompanyPage: FC = () => {
    const [inn, setInn] = useState('');
    const [status, setStatus] = useState<'default' | 'error' | 'focused'>('focused');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate(); // Инициализируем useNavigate

    const mutation = useMutation({
        mutationFn: async (params: { inn: string }) => {
            return await addCompany(params);
        },
        onSuccess: () => {
            setStatus('default');
            setErrorMessage('');
            navigate('/my-company'); // Редирект на страницу успеха
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
        mutation.mutate({ inn });
    };

    return (
        <ProtectedPage back={true}>
            <form onSubmit={onSubmit}>
                <List>
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
                    {errorMessage && <div style={{ color: 'red', marginTop: '5px' }}>{errorMessage}</div>}

                    <Button mode="filled" size="s" type="submit" disabled={mutation.isPending}>
                        {mutation.isPending ? 'Отправка...' : 'Отправить заявку'}
                    </Button>
                </List>
            </form>
        </ProtectedPage>
    );
};
