import { Section, Cell, List, IconContainer } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { ProtectedPage } from '@/components/ProtectedPage.tsx';
import { Icon28Stats } from '@telegram-apps/telegram-ui/dist/icons/28/stats';
import { Icon28Devices } from '@telegram-apps/telegram-ui/dist/icons/28/devices';
import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/chat';
import { Link } from '@/components/Link/Link.tsx';

export const IndexPage: FC = () => {
    return (
        <ProtectedPage back={false}>
            <List
                style={{
                    background: 'var(--tgui--secondary_bg_color)',
                    // padding: '10px',
                }}
            >
                <Section
                    footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
                    header="Main Settings"
                >
                    {' '}
                    <Link to="/my-company">
                        <Cell
                            before={
                                <IconContainer>
                                    <Icon28Chat />
                                </IconContainer>
                            }
                        >
                            Моя компания
                        </Cell>
                    </Link>
                    <Cell
                        before={
                            <IconContainer>
                                <Icon28Devices />
                            </IconContainer>
                        }
                    >
                        Автопарк
                    </Cell>
                    <Cell
                        before={
                            <IconContainer>
                                <Icon28Stats />
                            </IconContainer>
                        }
                    >
                        Водители
                    </Cell>
                </Section>
                <Section
                    footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
                    header="Main Settings"
                >
                    {' '}
                    <Link to="/my-company">
                        <Cell
                            before={
                                <IconContainer>
                                    <Icon28Chat />
                                </IconContainer>
                            }
                        >
                            Выйти
                        </Cell>
                    </Link>
                </Section>
            </List>
        </ProtectedPage>
    );
};
