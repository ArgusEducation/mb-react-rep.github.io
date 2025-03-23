import type { Meta } from '@storybook/react';
import {Layout} from "./Layout";
import {Logo} from "./Logo";
import {Header} from "./Header";

const meta: Meta<typeof Layout> = {
    title: 'Example/Layout',
    component: Layout
};

export default meta;

export const Default = {
    args: {
        header: <Header logo={<Logo text="My Logo" />} />
    }
}