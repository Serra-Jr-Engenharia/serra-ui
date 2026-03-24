import type { Meta, StoryObj } from '@storybook/react';
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter, 
  DialogClose 
} from '../app/components/ui/dialog';
import { Button } from '../app/components/ui/button';
import { Label } from '../app/components/ui/label';
import { Input } from '../app/components/ui/input';

const meta: Meta<typeof Dialog> = {
  title: 'Componentes/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Para instalar este componente no seu projeto, rode:\n\n```bash\nnpx serraui add dialog\n```\n\nJanela modal para bloquear interações do usuário enquanto requer uma ação ou confirmação (Acessível, baseada no Radix UI).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Confirmacao: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Deletar Usuário</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tem certeza absoluta?</DialogTitle>
          <DialogDescription>
            Essa ação não pode ser desfeita. O usuário será permanentemente removido do banco de dados da Serra Jr.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive">Estou Ciente e Quero Deletar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Formulario: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Editar Perfil</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
          <DialogDescription>
            Faça mudanças no seu perfil aqui. Clique em "Salvar" quando terminar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" defaultValue="Pedro Marques" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Membro de
            </Label>
            <Input id="username" defaultValue="Engenharia de Software" className="col-span-3" disabled />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Salvar Alterações</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
