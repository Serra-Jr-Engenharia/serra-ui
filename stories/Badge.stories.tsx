import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../app/components/ui/badge';

const meta: Meta<typeof Badge> = {
  title: 'Componentes/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Para instalar este componente no seu projeto, rode:\n\n```bash\nnpx serraui add badge\n```\n\nSelos de pequenos textos usados para identificar o status de um item.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'success', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Padrao: Story = {
  args: {
    children: 'Novo Projeto',
    variant: 'default',
  },
};

export const Secundario: Story = {
  args: {
    children: 'Em Análise',
    variant: 'secondary',
  },
};

export const Sucesso: Story = {
  args: {
    children: 'Concluído',
    variant: 'success',
  },
};

export const Alerta: Story = {
  args: {
    children: 'Atenção',
    variant: 'warning',
  },
};

export const Destrutivo: Story = {
  args: {
    children: 'Falhou',
    variant: 'destructive',
  },
};

export const Contorno: Story = {
  args: {
    children: 'Arquivado',
    variant: 'outline',
  },
};
