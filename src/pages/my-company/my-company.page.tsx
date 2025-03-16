import { Button, Cell, IconContainer, Section, Spinner } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { Link } from '@/components/Link/Link.tsx';

import { ProtectedPage } from '@/components/ProtectedPage.tsx';
import { useQuery } from '@tanstack/react-query';
import { Icon28Stats } from '@telegram-apps/telegram-ui/dist/icons/28/stats';
import { getCompanyList } from '@/api/company.ts';

export const MyCompanyPage: FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['company_list'],
        queryFn: () => getCompanyList(),
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
                    <Link key={item.id} to={`/company-cart/${item.id}`}>
                        <Cell
                            key={item.id}
                            before={
                                <IconContainer>
                                    <Icon28Stats />
                                </IconContainer>
                            }
                        >
                            {item.name}
                        </Cell>
                    </Link>
                ))}
            </Section>
            <Link to="/add-company">
                <Button mode="filled" size="s">
                    Добавить компанию
                </Button>
            </Link>
        </ProtectedPage>
    );
};
