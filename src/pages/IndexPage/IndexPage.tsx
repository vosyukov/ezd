import {Section, Cell, List, Input, IconContainer} from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import {ProtectedPage} from "@/components/ProtectedPage.tsx";
import {Icon28Stats} from "@telegram-apps/telegram-ui/dist/icons/28/stats";
import {Icon28Devices} from "@telegram-apps/telegram-ui/dist/icons/28/devices";
import {Icon28Chat} from "@telegram-apps/telegram-ui/dist/icons/28/chat";

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
          <Cell before={<IconContainer><Icon28Chat /></IconContainer>}>
            Chat Settings
          </Cell>
          <Cell before={<IconContainer><Icon28Devices /></IconContainer>}>
            Data and Storage
          </Cell>
          <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
            Devices
          </Cell>
        </Section>
        <Section
            footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
            header="Personal Information"
        >
          <Input
              header="First name"
              placeholder="21 y.o. designer from San Francisco"
          />
          <Input
              header="Last name"
              placeholder="21 y.o. designer from San Francisco"
          />
        </Section>
      </List>
      </ProtectedPage>
  );
};
