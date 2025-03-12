import { Section, Cell, List, IconContainer } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { ProtectedPage } from '@/components/ProtectedPage.tsx';
import { Icon28Stats } from '@telegram-apps/telegram-ui/dist/icons/28/stats';
import { Icon28Devices } from '@telegram-apps/telegram-ui/dist/icons/28/devices';
import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/chat';
import { Link } from '@/components/Link/Link.tsx';
import { removeJwt } from '@/jwt.storage.ts';
import { useNavigate } from 'react-router-dom';

export const MainPage: FC = () => {
    const navigate = useNavigate();

    const onClick = () => {
        removeJwt();

        navigate('/auth');
    };

    return (
        <ProtectedPage back={false}>
            <List
                style={{
                    background: 'var(--tgui--secondary_bg_color)',
                    // padding: '10px',
                }}
            >
                <Section header="Моя ТК">
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
                <Section header="Полезные сервисы">
                    <Cell
                        before={
                            <IconContainer>
                                <Icon28Chat />
                            </IconContainer>
                        }
                    >
                        Проверка водителя
                    </Cell>
                    <Cell
                        before={
                            <IconContainer>
                                <Icon28Chat />
                            </IconContainer>
                        }
                    >
                        Проверка компании
                    </Cell>
                </Section>
                <Section>
                    <Cell
                        onClick={onClick}
                        before={
                            <IconContainer>
                                <Icon28Chat />
                            </IconContainer>
                        }
                    >
                        Выйти
                    </Cell>
                </Section>
            </List>
        </ProtectedPage>
    );
};
