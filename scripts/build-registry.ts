import fs from 'fs';
import path from 'path';

const UI_DIR = path.join(process.cwd(), 'app', 'components', 'ui');
const REGISTRY_DIR = path.join(process.cwd(), 'public', 'registry');

// Ensure registry dir exists
if (!fs.existsSync(REGISTRY_DIR)) {
  fs.mkdirSync(REGISTRY_DIR, { recursive: true });
}

const extractDependencies = (content: string): string[] => {
  const deps = new Set<string>();
  const importRegex = /from ['"]([^"']+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const pkg = match[1];
    // Ignore internal paths and next/react
    if (!pkg.startsWith('.') && !pkg.startsWith('@/') && pkg !== 'react' && pkg !== 'next' && pkg !== 'clsx' && pkg !== 'tailwind-merge') {
      deps.add(pkg);
    }
  }
  // All components use clsx and tailwind-merge in their cn util
  deps.add('clsx');
  deps.add('tailwind-merge');
  return Array.from(deps);
};

async function buildRegistry() {
  const files = fs.readdirSync(UI_DIR);
  const index: string[] = [];

  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;

    const name = file.replace('.tsx', '');
    index.push(name);

    const filePath = path.join(UI_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace absolute imports to standard relative if needed, but keeping @/ is fine for utils
    // if users have standard paths.

    const dependencies = extractDependencies(content);

    const registryFiles: any[] = [
      {
        name: file,
        content
      }
    ];

    if (name === 'logo') {
      const publicDir = path.join(process.cwd(), 'public');
      const logos = ['LogoSerra.svg', 'LogoENome.svg'];
      for (const logo of logos) {
        if (fs.existsSync(path.join(publicDir, logo))) {
          registryFiles.push({
            name: logo,
            content: fs.readFileSync(path.join(publicDir, logo), 'utf-8'),
            target: 'public'
          });
        }
      }
    }

    const registryItem = {
      name,
      dependencies,
      files: registryFiles
    };

    fs.writeFileSync(
      path.join(REGISTRY_DIR, `${name}.json`),
      JSON.stringify(registryItem, null, 2)
    );
    console.log(`Generated registry for ${name}`);
  }

  // Generate an index of components
  fs.writeFileSync(
    path.join(REGISTRY_DIR, 'index.json'),
    JSON.stringify(index, null, 2)
  );
  console.log('Registry index generated.');
}

buildRegistry().catch(console.error);
