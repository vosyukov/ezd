import { Button } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Page } from '@/components/Page.tsx';
import { useMutation } from '@tanstack/react-query';
import { retrieveLaunchParams } from '@telegram-apps/sdk';
import { login } from '@/api/auth.ts';
import { useNavigate } from 'react-router-dom';

export const AuthPage: FC = () => {
    const mutation = useMutation({
        mutationFn: (val: string) => login(val),
    });

    const navigate = useNavigate();

    const onClick = async () => {
        const { initDataRaw = '' } = retrieveLaunchParams();
        const jwt = await mutation.mutateAsync(initDataRaw);
        if (jwt) {
            localStorage.setItem('jwt', jwt);
            navigate('/');
            // {isSuccess && <Navigate to="/" replace/>}
        }
    };

    return (
        <Page>
            <Button onClick={onClick} disabled={mutation.isPending}>
                Войти
            </Button>
        </Page>
    );
};
