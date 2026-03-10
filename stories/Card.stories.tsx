import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../app/components/ui/card';
import { Button } from '../app/components/ui/button';
import { Input } from '../app/components/ui/input';
import { Label } from '../app/components/ui/label';

const meta: Meta<typeof Card> = {
  title: 'Componentes/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

// 1. O Card Básico (Só com texto)
export const Simples: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Projeto Alpha</CardTitle>
        <CardDescription>Site institucional para cliente de engenharia.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          O projeto está na fase de prototipação no Figma e desenvolvimento da biblioteca no Storybook.
        </p>
      </CardContent>
    </Card>
  ),
};

// 2. Card com Ações (Botões no Rodapé)
export const ComAcoes: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Membro Destaque</CardTitle>
        <CardDescription>Diretoria de Projetos</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Ana Silva completou 3 projetos com sucesso neste semestre.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Ver Perfil</Button>
        <Button>Elogiar</Button>
      </CardFooter>
    </Card>
  ),
};

// 3. Caso Real: Um formulário montado dentro do Card
export const FormularioLogin: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login Interno</CardTitle>
        <CardDescription>Acesse o portal da Serra Jr.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="nome@serrajr.eng.br" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Entrar</Button>
      </CardFooter>
    </Card>
  ),
};