import type { Meta, StoryObj } from '@storybook/react';
import { Countdown } from '../app/components/ui/countdown';

const generateFutureDate = (daysAhead: number) => {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  return date;
};

const meta: Meta<typeof Countdown> = {
  title: 'Componentes/Countdown',
  component: Countdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Countdown>;

export const Padrao: Story = {
  args: {
    targetDate: generateFutureDate(7), 
  },
};

export const EventoProximo: Story = {
  args: {
    targetDate: new Date(new Date().getTime() + 2 * 60 * 60 * 1000), 
  },
};