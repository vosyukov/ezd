import {Button, Input} from '@telegram-apps/telegram-ui';
import type {FC} from 'react';


import {Page} from '@/components/Page.tsx';
import {Link} from "@/components/Link/Link.tsx";

export const AuthPage: FC = () => {


    return (
        <Page>
            <Input status="focused" header="email"/>
            <Input status="focused" header="password"/>

            <Button mode="plain" size="s" stretched>Войти</Button>
            <Link to="/registration">


                <Button
                    mode="plain"
                    size="s"
                    stretched
                >
                    Зарегистрироваться
                </Button>
            </Link>
        </Page>
    );
};
