#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import fetch from "node-fetch";
import ora from "ora";
import { execSync } from "child_process";

const program = new Command();
const REGISTRY_URL = process.env.REGISTRY_URL || "http://localhost:3000/registry";
const UI_PATH = path.join(process.cwd(), "components", "ui");

program
  .name("serraui")
  .description("CLI da Serra Jr. para facilitar a instalação de componentes UI.")
  .version("1.0.0");

program
  .command("add")
  .description("adiciona um componente ao seu projeto")
  .argument("<component>", "nome do componente para adicionar")
  .action(async (componentName) => {
    const spinner = ora(`Buscando ${componentName} no registro...`).start();

    try {
      const response = await fetch(`${REGISTRY_URL}/${componentName}.json`);
      if (!response.ok) {
        throw new Error(`Componente '${componentName}' não encontrado no registro (${response.status})`);
      }

      const componentData = await response.json();
      spinner.text = `Instalando dependências para ${componentName}...`;
      
      if (componentData.dependencies && componentData.dependencies.length > 0) {
        // filter out internal dependencies and tailwind-merge/clsx and lucide-react if already installed in project
        // but for simplicity we will just run npm install
        const deps = componentData.dependencies.join(" ");
        execSync(`npm install ${deps}`, { stdio: "ignore" });
      }

      spinner.text = `Verificando dependências base de estilo...`;
      
      const LIB_PATH = path.join(process.cwd(), "lib");
      const UTILS_FILE = path.join(LIB_PATH, "utils.ts");
      if (!fs.existsSync(UTILS_FILE)) {
        if (!fs.existsSync(LIB_PATH)) {
          fs.mkdirSync(LIB_PATH, { recursive: true });
        }
        const utilsContent = `import { clsx, type ClassValue } from "clsx"\nimport { twMerge } from "tailwind-merge"\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}\n`;
        fs.writeFileSync(UTILS_FILE, utilsContent, "utf-8");
      }

      spinner.text = `Criando arquivos para ${componentName}...`;
      
      if (!fs.existsSync(UI_PATH)) {
        fs.mkdirSync(UI_PATH, { recursive: true });
      }

      for (const file of componentData.files) {
        let filePath = path.join(UI_PATH, file.name);
        if (file.target === "public") {
          const PUBLIC_PATH = path.join(process.cwd(), "public");
          if (!fs.existsSync(PUBLIC_PATH)) {
            fs.mkdirSync(PUBLIC_PATH, { recursive: true });
          }
          filePath = path.join(PUBLIC_PATH, file.name);
        }
        fs.writeFileSync(filePath, file.content, "utf-8");
        chalk.green(`  Criado: ${file.name}`);
      }

      spinner.succeed(`Componente ${chalk.green(componentName)} adicionado e instalado com sucesso!`);
      console.log(`\nLocalização: ${chalk.gray(path.join("components", "ui", componentData.files[0].name))}`);

    } catch (error: any) {
      spinner.fail(chalk.red("Ocorreu um erro: ") + error.message);
      process.exit(1);
    }
  });

program.parse();
