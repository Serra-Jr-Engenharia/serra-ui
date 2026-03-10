import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../app/components/ui/logo';

const meta: Meta<typeof Logo> = {
  title: 'Fundamentos/Logo', // Coloquei em Fundamentos para separar dos botões!
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio', // Cria um botãozinho para alternar entre as duas logos
      options: ['completa', 'simbolo'],
      description: 'A variação da logo institucional da EJ a ser exibida',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

// 1. Variação: Logo Completa
export const Completa: Story = {
  args: {
    variant: 'completa',
  },
};

// 2. Variação: Apenas o Símbolo
export const Simbolo: Story = {
  args: {
    variant: 'simbolo',
  },
};

// 3. Exemplo de uso num container escuro (Para testar o contraste)
export const FundoEscuro: Story = {
  render: () => (
    <div className="bg-slate-900 p-8 rounded-xl flex items-center justify-center">
      <Logo variant="completa" />
    </div>
  ),
};