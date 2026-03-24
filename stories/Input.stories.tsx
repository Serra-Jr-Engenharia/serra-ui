import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../app/components/ui/input';

// Configuração Geral da Vitrine
const meta: Meta<typeof Input> = {
  title: 'Componentes/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Para instalar este componente no seu projeto, rode:\n\n```bash\nnpx serraui add input\n```',
      },
    },
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

export const ComIcone: Story = {
  args: {
    type: 'text',
    placeholder: 'Pesquisar...',
    startIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    ),
  },
};

export const ComErro: Story = {
  args: {
    type: 'email',
    defaultValue: 'nome-invalido',
    error: 'Por favor, insira um e-mail válido da Serra Jr.',
  },
};