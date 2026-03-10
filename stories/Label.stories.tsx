import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../app/components/ui/label';
import { Input } from '../app/components/ui/input';

const meta: Meta<typeof Label> = {
  title: 'Componentes/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

// 1. Label Simples
export const Padrao: Story = {
  args: {
    htmlFor: 'email',
    children: 'Endereço de E-mail',
  },
};

// 2. Campo Obrigatório (Como aparece nos forms de inscrição)
export const Obrigatorio: Story = {
  render: () => (
    <Label htmlFor="nome">
      Nome Completo <span className="text-destructive">*</span>
    </Label>
  ),
};

// 3. Agrupado com Input (O padrão real de uso)
export const EmUsoComInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="telefone">Whatsapp para Contato</Label>
      <Input id="telefone" type="tel" placeholder="(22) 99999-9999" />
    </div>
  ),
};

// 4. Acompanhando um campo bloqueado
export const Desabilitado: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5 opacity-50 cursor-not-allowed">
      <Label htmlFor="cpf">CPF (Não editável)</Label>
      <Input id="cpf" type="text" disabled placeholder="000.000.000-00" />
    </div>
  ),
};