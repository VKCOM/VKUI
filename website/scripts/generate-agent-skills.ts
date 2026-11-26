import { createHash } from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { parseFrontmatter } from './common/parseFrontmatter.ts';
import { runIfMain } from './common/runIfMain.ts';

const SKILLS_DIRECTORY = path.resolve(import.meta.dirname, '../public/.well-known/agent-skills');

export function generateAgentSkills() {
  const skills = fs
    .readdirSync(SKILLS_DIRECTORY, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const content = fs.readFileSync(path.join(SKILLS_DIRECTORY, entry.name, 'SKILL.md'));
      const { data } = parseFrontmatter(content.toString('utf8'));
      const { name, description } = data;

      if (
        !name ||
        name.length > 64 ||
        !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) ||
        name !== entry.name ||
        !description ||
        description.length > 1024
      ) {
        throw new Error(`Invalid agent skill metadata: ${entry.name}/SKILL.md`);
      }

      return {
        name,
        type: 'skill-md',
        description,
        url: `${name}/SKILL.md`,
        digest: `sha256:${createHash('sha256').update(content).digest('hex')}`,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const index = {
    $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
    skills,
  };

  fs.writeFileSync(
    path.join(SKILLS_DIRECTORY, 'index.json'),
    `${JSON.stringify(index, null, 2)}\n`,
  );
}

void runIfMain(import.meta.url, generateAgentSkills);
