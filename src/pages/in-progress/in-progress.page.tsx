import type { FC } from 'react';

import { ProtectedPage } from '@/components/ProtectedPage.tsx';

import { Placeholder } from '@telegram-apps/telegram-ui';

export const InProgressPage: FC = () => {
    return (
        <ProtectedPage back={true}>
            <Placeholder
                description={'Функционал находится в разработке, в скором времени он будет доступен'}
                header="В разработке..."
            >
                {/*<img alt="Telegram sticker" className="blt0jZBzpxuR4oDhJc8s" src="https://xelene.me/telegram.gif" />*/}
            </Placeholder>
        </ProtectedPage>
    );
};
