
import { Spinner} from '@telegram-apps/telegram-ui';
import type { FC } from 'react';


import { Page } from '@/components/Page.tsx';
import {useQuery} from "@tanstack/react-query";
import {retrieveLaunchParams} from "@telegram-apps/sdk";
import {login} from "@/api.ts";
import {Navigate} from "react-router-dom";

export const AuthPage: FC = () => {

    const { initDataRaw = '' } = retrieveLaunchParams();
    const {isLoading, isSuccess, data} = useQuery({ queryKey: ['todos'], queryFn: () => login(initDataRaw) })

    if(isSuccess){
        localStorage.setItem('jwt', data)
    }

    return (
        <Page>
            {isLoading && <Spinner size="l" />}
            {isSuccess && <Navigate to="/" replace/>}
        </Page>
    );
};
