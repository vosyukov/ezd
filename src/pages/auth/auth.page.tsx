import { Button } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Page } from '@/components/Page.tsx';
import { useMutation } from '@tanstack/react-query';
import { retrieveLaunchParams } from '@telegram-apps/sdk';
import { login } from '@/api/auth.ts';

export const AuthPage: FC = () => {
    const { initDataRaw = '' } = retrieveLaunchParams();
    const mutation = useMutation({
        mutationFn: () => login(initDataRaw),
    });

    const onClick = async () => {
        const jwt = await mutation.mutateAsync();
        if (jwt) {
            localStorage.setItem('jwt', jwt);
            // {isSuccess && <Navigate to="/" replace/>}
        }
    };

    return (
        <Page>
            <Button onClick={onClick}>Войти</Button>
            {/*{isLoading && <Spinner size="l" />}*/}
            {/*{isSuccess && <Navigate to="/" replace/>}*/}
        </Page>
    );
};
