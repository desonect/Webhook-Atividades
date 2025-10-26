import fs from "fs";
import path from "path";

const baseDir = path.join(process.cwd(), "public", "arquivos");
const saidaJSON = path.join(process.cwd(), "public", "arquivos.json");

const resultado = {};

try {
  const pastas = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const pasta of pastas) {
    const arquivos = fs.readdirSync(path.join(baseDir, pasta))
      .filter(f => f.toLowerCase().endsWith(".pdf"));
    resultado[pasta.toLowerCase()] = arquivos;
  }

  fs.writeFileSync(saidaJSON, JSON.stringify(resultado, null, 2), "utf-8");
  console.log("✅ Lista de arquivos gerada com sucesso:");
  console.log(resultado);
} catch (err) {
  console.error("❌ Erro ao gerar lista de arquivos:", err);
}
