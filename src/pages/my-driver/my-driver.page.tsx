import { Button, Cell, IconContainer, Section, Spinner } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { Link } from '@/components/Link/Link.tsx';

import { ProtectedPage } from '@/components/ProtectedPage.tsx';
import { useQuery } from '@tanstack/react-query';
import { Icon28Stats } from '@telegram-apps/telegram-ui/dist/icons/28/stats';

import { getDriverList } from '@/api/driver.ts';

export const MyDriverPage: FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['driver_list'],
        queryFn: () => getDriverList(),
    });

    if (isLoading) {
        return <Spinner size="l" />;
    }

    if (!data) {
        return <Spinner size="l" />;
    }

    return (
        <ProtectedPage back={true}>
            <Section
                footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
                header="Main Settings"
            >
                {data.map((item) => (
                    <Cell
                        key={item.id}
                        before={
                            <IconContainer>
                                {' '}
                                <Icon28Stats />
                            </IconContainer>
                        }
                    >
                        {item.name}
                    </Cell>
                ))}
            </Section>
            <Link to="/add-driver">
                <Button mode="filled" size="s">
                    Добавить водителя
                </Button>
            </Link>
        </ProtectedPage>
    );
};
