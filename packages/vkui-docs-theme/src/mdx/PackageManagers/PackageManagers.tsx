import { compileMdx } from 'nextra/compile';
import { MDXRemote } from 'nextra/mdx-remote';
import { PackageManagersClient } from './PackageManagersClient';

type PackageManagersType = 'npm' | 'yarn' | 'pnpm';

type PackageManagersProps = {
  [K in PackageManagersType]?: string;
};

function codeExampleString(command: string) {
  return `\`${command}{:sh}\``;
}

export async function PackageManagers({ npm, yarn, pnpm }: PackageManagersProps) {
  const availableManagers = (
    [
      {
        id: 'npm',
        content: npm && <MDXRemote compiledSource={await compileMdx(codeExampleString(npm))} />,
      },
      {
        id: 'yarn',
        content: yarn && <MDXRemote compiledSource={await compileMdx(codeExampleString(yarn))} />,
      },
      {
        id: 'pnpm',
        content: pnpm && <MDXRemote compiledSource={await compileMdx(codeExampleString(pnpm))} />,
      },
    ] as const
  ).filter((manager) => manager.content);

  return <PackageManagersClient packageManagers={availableManagers} />;
}
