import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '../app/components/ui/alert';
import { Terminal, AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'Componentes/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Para instalar este componente no seu projeto, rode:\n\n```bash\nnpx serraui add alert\n```\n\nCaixas de feedback e aviso para destacar informações vitais para os usuários.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Padrao: Story = {
  render: () => (
    <Alert className="max-w-md">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Dica de Sistema</AlertTitle>
      <AlertDescription>
        Você pode utilizar o atalho CMD + K para buscar diretamente de qualquer página.
      </AlertDescription>
    </Alert>
  ),
};

export const Sucesso: Story = {
  render: () => (
    <Alert variant="success" className="max-w-md">
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Projeto Finalizado</AlertTitle>
      <AlertDescription>
        O relatório "Análise de Células de Carga" foi exportado em PDF com sucesso.
      </AlertDescription>
    </Alert>
  ),
};

export const Destrutivo: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Erro na Integração</AlertTitle>
      <AlertDescription>
        Sua conexão com o banco de dados falhou. Por favor, cheque suas credenciais `.env` locais.
      </AlertDescription>
    </Alert>
  ),
};

export const Aviso: Story = {
  render: () => (
    <Alert variant="warning" className="max-w-md">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Servidor Reiniciando</AlertTitle>
      <AlertDescription>
        A aplicação central ficará offline por 5 minutos à meia-noite devido a atualizações na Vercel.
      </AlertDescription>
    </Alert>
  ),
};
