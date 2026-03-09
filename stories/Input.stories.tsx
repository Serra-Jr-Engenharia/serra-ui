import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../app/components/ui/input'; // Ajuste o caminho se necessário

// Configuração Geral da Vitrine
const meta: Meta<typeof Input> = {
  title: 'Componentes/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      description: 'O tipo nativo do input HTML',
      options: ['text', 'email', 'password', 'number', 'file'],
    },
    disabled: {
      control: 'boolean',
      description: 'Define se o campo está bloqueado para digitação',
    },
    placeholder: {
      control: 'text',
      description: 'O texto de dica que aparece quando o campo está vazio',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Nossas Variações (Stories)

export const Padrao: Story = {
  args: {
    type: 'text',
    placeholder: 'Digite seu nome...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'exemplo@serrajr.eng.br',
  },
};

export const Senha: Story = {
  args: {
    type: 'password',
    placeholder: 'Digite sua senha',
  },
};

export const Arquivo: Story = {
  args: {
    type: 'file',
  },
};

export const Desabilitado: Story = {
  args: {
    type: 'email',
    placeholder: 'E-mail não editável',
    disabled: true,
  },
};