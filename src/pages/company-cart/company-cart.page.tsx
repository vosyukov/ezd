import type { FC } from 'react';
import { useParams } from 'react-router-dom'; // Импорт useNavigate

import { ProtectedPage } from '@/components/ProtectedPage.tsx';
import { useQuery } from '@tanstack/react-query';

import { getCompanyById } from '@/api/company.ts';
import { Placeholder, Section, SegmentedControl, Spinner, Text } from '@telegram-apps/telegram-ui';
import { SegmentedControlItem } from '@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem';

export const CompanyCartPage: FC = () => {
    const { companyId = '' } = useParams(); // Инициализируем useNavigate

    const { data, isLoading } = useQuery({
        queryKey: ['company'],
        queryFn: () => getCompanyById(companyId),
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
                    Label 1
                </SegmentedControlItem>
                <SegmentedControlItem onClick={function noRefCheck() {}}>Label 2</SegmentedControlItem>
                <SegmentedControlItem onClick={function noRefCheck() {}}>Label 3</SegmentedControlItem>
            </SegmentedControl>
            <Section
                footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
                header="Main Settings"
            >
                <Text>{data?.inn}</Text>
                <Text>{data?.name}</Text>
            </Section>
        </ProtectedPage>
    );
};
