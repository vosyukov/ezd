import {List, Spinner, Title} from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import {ProtectedPage} from "@/components/ProtectedPage.tsx";
import {useQuery} from "@tanstack/react-query";
import { test} from "@/api.ts";


export const MyCompanyPage: FC = () => {
    const { data, isLoading} = useQuery({ queryKey: ['todos'], queryFn: () => test() })
console.log(data)

    return (
        <ProtectedPage back={false}>
            <List>
                {isLoading && <Spinner size="l" />}
                {data && <Title>{data}</Title>}
            </List>
        </ProtectedPage>
    );
};
