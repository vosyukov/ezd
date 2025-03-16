import type { FC } from 'react';
import { useParams } from 'react-router-dom'; // Импорт useNavigate

import { ProtectedPage } from '@/components/ProtectedPage.tsx';
import { useQuery } from '@tanstack/react-query';

import { Placeholder, Section, SegmentedControl, Spinner, Text } from '@telegram-apps/telegram-ui';
import { SegmentedControlItem } from '@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem';
import { getDriverById } from '@/api/driver.ts';

export const DriverCartPage: FC = () => {
    const { driverId = '' } = useParams(); // Инициализируем useNavigate

    const { data, isLoading } = useQuery({
        queryKey: ['company'],
        queryFn: () => getDriverById(driverId),
    });
    if (isLoading) {
        return <Spinner size="l" />;
    }

    if (!data) {
        return <Spinner size="l" />;
    }
    return (
        <ProtectedPage back={true}>
            <Placeholder description={data.inn} header={data.name}>
                <img alt="Telegram sticker" className="blt0jZBzpxuR4oDhJc8s" src="https://xelene.me/telegram.gif" />
            </Placeholder>
            <SegmentedControl>
                <SegmentedControlItem onClick={function noRefCheck() {}} selected>
                    Информация
                </SegmentedControlItem>
                <SegmentedControlItem onClick={function noRefCheck() {}}>Мониторинг</SegmentedControlItem>
            </SegmentedControl>
            <Section footer="Карточка сотрудника" header="Main Settings">
                <Text>ИНН: {data?.inn}</Text>
                <Text>ФИО: {data?.name}</Text>
                <Text>Дата трудоустройства</Text>
                <Text>Компания </Text>
                <Text>Телефон </Text>
            </Section>
        </ProtectedPage>
    );
};
