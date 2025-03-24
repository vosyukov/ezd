import { Button, Cell, IconContainer, Placeholder, Section, Spinner, Text } from '@telegram-apps/telegram-ui';
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
            {data.length === 0 && (
                <Placeholder
                    description={
                        <Link to="/add-company">
                            <Button mode="filled" size="s">
                                Добавить
                            </Button>
                        </Link>
                    }
                >
                    <Text>На данный момент у вас не добавлено ни одной компании. Добавьте новую компанию</Text>
                </Placeholder>
            )}
            {data.length > 0 && (
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
                    <Link to="/add-company">
                        <Button mode="filled" size="s">
                            Добавить компанию
                        </Button>
                    </Link>
                </Section>
            )}
        </ProtectedPage>
    );
};
