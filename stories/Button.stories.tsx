import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../app/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Componentes/Button', 
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], 
  argTypes: {
    variant: {
      control: 'select',
      description: 'As variações de cor e estilo do botão',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      description: 'Os tamanhos disponíveis',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primario: Story = {
  args: {
    children: 'Botão Primário',
    variant: 'default',
    size: 'default',
  },
};

export const Secundario: Story = {
  args: {
    children: 'Botão Secundário',
    variant: 'secondary',
  },
};

export const Destrutivo: Story = {
  args: {
    children: 'Excluir',
    variant: 'destructive',
  },
};

export const Contorno: Story = {
  args: {
    children: 'Apenas Contorno',
    variant: 'outline',
  },
};