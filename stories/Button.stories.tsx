import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../app/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Componentes/Button', 
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Para instalar este componente no seu projeto, rode:\n\n```bash\nnpx serraui add button\n```',
      },
    },
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

export const Carregando: Story = {
  args: {
    children: 'Processando...',
    isLoading: true,
  },
};

export const ComIconeDireita: Story = {
  args: {
    children: 'Avançar',
    rightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    ),
  },
};

export const Glow: Story = {
  args: {
    children: 'Cresça com a Serra Jr.',
    variant: 'glow',
    size: 'lg',
  },
};