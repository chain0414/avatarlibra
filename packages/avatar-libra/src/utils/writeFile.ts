import fs from 'fs-extra';
import path from 'node:path';

export async function writeFile(
  filePath: string,
  content: string | ArrayBuffer,
) {
  if (fs.existsSync(filePath)) {
    throw new Error(`File already exists at ${filePath}`);
  }

  fs.ensureDir(path.dirname(filePath));

  if (typeof content === 'string') {
    await fs.writeFile(filePath, content);
  } else {
    await fs.writeFile(filePath, new Uint8Array(content));
  }
}
