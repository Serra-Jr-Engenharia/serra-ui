#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_commander = require("commander");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_chalk = __toESM(require("chalk"));
var import_node_fetch = __toESM(require("node-fetch"));
var import_ora = __toESM(require("ora"));
var import_child_process = require("child_process");
var program = new import_commander.Command();
var REGISTRY_URL = process.env.REGISTRY_URL || "http://localhost:3000/registry";
var UI_PATH = import_path.default.join(process.cwd(), "components", "ui");
program.name("serraui").description("CLI da Serra Jr. para facilitar a instala\xE7\xE3o de componentes UI.").version("1.0.0");
program.command("add").description("adiciona um componente ao seu projeto").argument("<component>", "nome do componente para adicionar").action(async (componentName) => {
  const spinner = (0, import_ora.default)(`Buscando ${componentName} no registro...`).start();
  try {
    const response = await (0, import_node_fetch.default)(`${REGISTRY_URL}/${componentName}.json`);
    if (!response.ok) {
      throw new Error(`Componente '${componentName}' n\xE3o encontrado no registro (${response.status})`);
    }
    const componentData = await response.json();
    spinner.text = `Instalando depend\xEAncias para ${componentName}...`;
    if (componentData.dependencies && componentData.dependencies.length > 0) {
      const deps = componentData.dependencies.join(" ");
      (0, import_child_process.execSync)(`npm install ${deps}`, { stdio: "ignore" });
    }
    spinner.text = `Verificando depend\xEAncias base de estilo...`;
    const LIB_PATH = import_path.default.join(process.cwd(), "lib");
    const UTILS_FILE = import_path.default.join(LIB_PATH, "utils.ts");
    if (!import_fs.default.existsSync(UTILS_FILE)) {
      if (!import_fs.default.existsSync(LIB_PATH)) {
        import_fs.default.mkdirSync(LIB_PATH, { recursive: true });
      }
      const utilsContent = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;
      import_fs.default.writeFileSync(UTILS_FILE, utilsContent, "utf-8");
    }
    spinner.text = `Criando arquivos para ${componentName}...`;
    if (!import_fs.default.existsSync(UI_PATH)) {
      import_fs.default.mkdirSync(UI_PATH, { recursive: true });
    }
    for (const file of componentData.files) {
      let filePath = import_path.default.join(UI_PATH, file.name);
      if (file.target === "public") {
        const PUBLIC_PATH = import_path.default.join(process.cwd(), "public");
        if (!import_fs.default.existsSync(PUBLIC_PATH)) {
          import_fs.default.mkdirSync(PUBLIC_PATH, { recursive: true });
        }
        filePath = import_path.default.join(PUBLIC_PATH, file.name);
      }
      import_fs.default.writeFileSync(filePath, file.content, "utf-8");
      import_chalk.default.green(`  Criado: ${file.name}`);
    }
    spinner.succeed(`Componente ${import_chalk.default.green(componentName)} adicionado e instalado com sucesso!`);
    console.log(`
Localiza\xE7\xE3o: ${import_chalk.default.gray(import_path.default.join("components", "ui", componentData.files[0].name))}`);
  } catch (error) {
    spinner.fail(import_chalk.default.red("Ocorreu um erro: ") + error.message);
    process.exit(1);
  }
});
program.parse();
