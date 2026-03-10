# 🧩 Serra UI - A Biblioteca de Componentes da Serra Jr

Bem-vindo ao **Serra UI**, o catálogo oficial de componentes da Serra Jr, construído com Next.js, Tailwind CSS e Storybook.

## 🚀 Como usar um componente no projeto do cliente

### Passo 1: Acesse a Vitrine Oficial
Abra o link do nosso Storybook (hospedado no GitHub Pages) e encontre o componente que você precisa no menu lateral (ex: `Button`, `Input`, `Card`).

### Passo 2: Teste e Copie o Código
1. Brinque com os controles na aba **Canvas** para ver as variações de tamanho, cor e estados do componente.
2. Acesse a aba **Docs** no topo da tela.
3. Vá até o bloco de código do componente e clique em **Show Code**.
4. Copie todo o código exibido.

### Passo 3: Cole e Use
WIP

---

## 🛠️ O Fluxo para adicionar novos componentes

Para colocar um componente novo no ar:

1. Programe o arquivo base do seu componente dentro de `components/ui/`.
2. Documente as variações criando um arquivo correspondente na pasta `stories/` (ex: `MeuComponente.stories.tsx`).
3. Faça o `commit` e o `push` para a branch `main`.

**A mágica do CI/CD:** Você não precisa se preocupar em colocar o site no ar. O scirpt do **GitHub Actions** vai detectar que um código novo chegou na `main`, fará o *build* automático e atualizará a vitrine oficial do Storybook na nuvem em poucos minutos.
