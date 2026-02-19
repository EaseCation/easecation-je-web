import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import archiver from 'archiver';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const PACKS_DIR = resolve(ROOT, 'packs');
const PUBLIC_DIR = resolve(ROOT, 'public');

const SERVER_NAME = 'EaseCation JE 测试服';
const SERVER_IP = 'je.easecation.net:25565';

/**
 * 生成 Minecraft servers.dat (NBT 格式)
 * 将预设服务器添加到服务器列表
 */
function generateServersDat() {
  const parts = [];

  const writeByte = (v) => {
    const b = Buffer.alloc(1);
    b.writeInt8(v);
    parts.push(b);
  };
  const writeShort = (v) => {
    const b = Buffer.alloc(2);
    b.writeInt16BE(v);
    parts.push(b);
  };
  const writeInt = (v) => {
    const b = Buffer.alloc(4);
    b.writeInt32BE(v);
    parts.push(b);
  };
  const writeUTF = (s) => {
    const encoded = Buffer.from(s, 'utf8');
    writeShort(encoded.length);
    parts.push(encoded);
  };

  const TAG_END = 0;
  const TAG_BYTE = 1;
  const TAG_STRING = 8;
  const TAG_LIST = 9;
  const TAG_COMPOUND = 10;

  // Root compound
  writeByte(TAG_COMPOUND);
  writeUTF('');

  // "servers" list of compounds
  writeByte(TAG_LIST);
  writeUTF('servers');
  writeByte(TAG_COMPOUND);
  writeInt(1);

  // Server entry
  writeByte(TAG_STRING);
  writeUTF('name');
  writeUTF(SERVER_NAME);

  writeByte(TAG_STRING);
  writeUTF('ip');
  writeUTF(SERVER_IP);

  writeByte(TAG_BYTE);
  writeUTF('acceptTextures');
  writeByte(1);

  writeByte(TAG_END); // End server compound
  writeByte(TAG_END); // End root compound

  return Buffer.concat(parts);
}

/**
 * 创建 zip 归档的辅助函数
 */
/** 过滤 .DS_Store 等系统文件 */
const skipJunk = (entry) => entry.name.includes('.DS_Store') ? false : entry;

function createArchive(outputPath) {
  const output = createWriteStream(outputPath);
  const archive = archiver('zip', { zlib: { level: 9 } });

  const done = new Promise((resolve, reject) => {
    output.on('close', () => resolve(archive.pointer()));
    archive.on('error', reject);
  });

  archive.pipe(output);
  return { archive, done };
}

/**
 * 构建整合包 zip（CurseForge 格式，兼容 HMCL）
 * 结构：manifest.json + overrides/(mods + config + servers.dat)
 */
async function buildModpackZip() {
  const outputPath = resolve(PUBLIC_DIR, 'easecation-modpack.zip');
  const { archive, done } = createArchive(outputPath);

  archive.file(resolve(PACKS_DIR, 'modpack', 'manifest.json'), { name: 'manifest.json' });
  archive.file(resolve(PACKS_DIR, 'README.md'), { name: 'README.md' });
  archive.directory(resolve(PACKS_DIR, 'mods'), 'overrides/mods', skipJunk);
  archive.directory(resolve(PACKS_DIR, 'config'), 'overrides/config', skipJunk);
  archive.append(generateServersDat(), { name: 'overrides/servers.dat' });
  await archive.finalize();

  const bytes = await done;
  console.log(`  easecation-modpack.zip (${(bytes / 1024 / 1024).toFixed(1)} MB)`);
}

async function main() {
  console.log('Building packs...');

  if (!existsSync(PUBLIC_DIR)) {
    mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  await buildModpackZip();

  console.log('Done!');
}

main().catch(err => {
  console.error('Failed to build packs:', err);
  process.exit(1);
});
