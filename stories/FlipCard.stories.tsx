import type { Meta, StoryObj } from '@storybook/react';
import { FlipCard } from '../app/components/ui/flip-card';
import { Button } from '../app/components/ui/button';
const meta: Meta<typeof FlipCard> = {
  title: 'Componentes/FlipCard (3D)',
  component: FlipCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FlipCard>;

// 1. Cenário: Apresentação de Equipe
export const MembroEquipe: Story = {
  args: {
    className: "w-[300px] h-[400px]",
    front: (
      <div className="w-full h-full bg-slate-900 text-white rounded-2xl flex flex-col justify-center items-center p-6 shadow-lg">
        <div className="w-32 h-32 bg-slate-700 rounded-full mb-4 border-4 border-blue-500 flex items-center justify-center text-4xl">
          👩‍💻
        </div>
        <h2 className="text-2xl font-bold">Ana Costa</h2>
        <p className="text-blue-400">Desenvolvedora Front-end</p>
      </div>
    ),
    back: (
      <div className="w-full h-full bg-blue-600 text-white rounded-2xl flex flex-col justify-center items-center p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Habilidades</h3>
        <ul className="space-y-2 mb-6 text-center">
          <li>✨ Next.js & React</li>
          <li>✨ Tailwind CSS</li>
          <li>✨ UI/UX Design</li>
        </ul>
        <Button variant="secondary" className="w-full">Ver Portfólio</Button>
      </div>
    ),
  },
};

// 2. Cenário: Plano de Preços (Para landing pages)
export const PlanoServico: Story = {
  args: {
    className: "w-[320px] h-[350px]",
    front: (
      <div className="w-full h-full bg-white border-2 border-slate-200 rounded-2xl flex flex-col justify-center items-center p-6 shadow-md hover:border-green-500 transition-colors">
        <h2 className="text-2xl font-bold text-slate-800">Site Institucional</h2>
        <p className="text-slate-500 mb-6 text-center mt-2">Perfeito para pequenas empresas começarem na internet.</p>
        <span className="text-green-600 font-bold">Passe o mouse para ver os detalhes</span>
      </div>
    ),
    back: (
      <div className="w-full h-full bg-green-50 text-green-900 border-2 border-green-500 rounded-2xl flex flex-col justify-between p-6 shadow-md">
        <div>
          <h3 className="font-bold text-lg mb-2">O que está incluso:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Até 5 páginas</li>
            <li>Formulário de Contato</li>
            <li>Otimizado para Celular (Responsivo)</li>
            <li>Domínio grátis por 1 ano</li>
          </ul>
        </div>
        <Button className="w-full bg-green-600 hover:bg-green-700">Solicitar Orçamento</Button>
      </div>
    ),
  },
};