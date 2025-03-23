import type { Meta } from '@storybook/react';
import {Header} from "./Header";
import {Logo} from "./Logo";

const meta: Meta<typeof Header> = {
    title: 'Example/MyHeader',
    component: Header
};

export default meta;

export const Default = {
    args: {
        logo: <Logo text="My Logo" />
    }
}