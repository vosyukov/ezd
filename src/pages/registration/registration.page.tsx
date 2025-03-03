
import {Button, Info, Input} from '@telegram-apps/telegram-ui';
import { FC} from 'react';


import { Page } from '@/components/Page.tsx';


export const RegistrationPage: FC = () => {


    return (
        <Page>
            <Info subtitle="Subtitle" type="text">Регистрация</Info>
            <Input status="focused" header="email" type="email" />
            <Button mode="filled" size="s"  >Зарегистрироваться</Button>
        </Page>
    );
};
