import type { Meta } from '@storybook/react';
import { ModalWindow } from './ModalWindow';

const meta: Meta<typeof ModalWindow> = {
    title: 'Example/ModalWindow',
    component: ModalWindow,
    tags: ['autodocs']
};

export default meta;

export const Default = {
    args: {
        visible: true
    }
}