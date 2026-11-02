import { readFile, mkdir, writeFile } from 'node:fs/promises';
const source = await readFile('Components/Portfolio/data.js', 'utf8');
const urls = [...new Set(source.match(/https:\/\/[^'\s]+/g))];
const results = [];
for (let offset = 0; offset < urls.length; offset += 5) {
  results.push(
    ...(await Promise.all(
      urls.slice(offset, offset + 5).map(async (url) => {
        try {
          const response = await fetch(url, {
            redirect: 'follow',
            signal: AbortSignal.timeout(20000),
          });
          await response.body?.cancel();
          return { url, status: response.status, finalUrl: response.url };
        } catch (error) {
          return { url, error: error.message };
        }
      })
    ))
  );
}
await mkdir('test-results', { recursive: true });
await writeFile('test-results/external-links.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
if (results.every((result) => result.error)) process.exitCode = 1;
