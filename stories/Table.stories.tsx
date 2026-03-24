import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../app/components/ui/table';
import { Badge } from '../app/components/ui/badge';

const meta: Meta<typeof Table> = {
  title: 'Componentes/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Para instalar este componente no seu projeto, rode:\n\n```bash\nnpx serraui add table\n```\n\nTabela responsiva de dados, muito útil para painéis de administração e listas extensas de entidades.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const invoices = [
  {
    invoice: 'INV001',
    status: 'Pago',
    total: 'R$ 250,00',
    client: 'EcoTech Solutions',
    statusVariant: 'success',
  },
  {
    invoice: 'INV002',
    status: 'Pendente',
    total: 'R$ 150,00',
    client: 'BuildCorp SA',
    statusVariant: 'warning',
  },
  {
    invoice: 'INV003',
    status: 'Cancelado',
    total: 'R$ 350,00',
    client: 'StartUP Beta',
    statusVariant: 'destructive',
  },
  {
    invoice: 'INV004',
    status: 'Pago',
    total: 'R$ 450,00',
    client: 'Instituição Alpha',
    statusVariant: 'success',
  },
  {
    invoice: 'INV005',
    status: 'Pago',
    total: 'R$ 550,00',
    client: 'Serra Jr. Engenharia',
    statusVariant: 'success',
  },
] as const;

export const ListaProjetos: Story = {
  render: () => (
    <Table className="max-w-4xl border rounded-md">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Identificador</TableHead>
          <TableHead>Cliente / Projeto</TableHead>
          <TableHead>Status Geral</TableHead>
          <TableHead className="text-right">Orçamento</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium text-muted-foreground">{invoice.invoice}</TableCell>
            <TableCell>{invoice.client}</TableCell>
            <TableCell>
              <Badge variant={invoice.statusVariant}>{invoice.status}</Badge>
            </TableCell>
            <TableCell className="text-right font-medium">{invoice.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
