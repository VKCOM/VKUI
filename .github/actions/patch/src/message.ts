export function getPatchInstructions(
  header: string,
  description: string,
  patch: { stableBranchRef: string; patchRefs: string; pullNumber: number },
) {
  const { stableBranchRef, patchRefs, pullNumber } = patch;

  return `
## ${header}

${description}

> Дальнейшие действия выполняют контрибьютеры из группы @VKCOM/vkui-core

Чтобы исправление попало в стабильную ветку, выполните следующие действия:

1. Создайте новую ветку от стабильной и примените исправления используя cherry-pick

\`\`\`bash
git stash # опционально
git fetch origin ${stableBranchRef}
git checkout -b patch/pr${pullNumber} origin/${stableBranchRef}
git cherry-pick ${patchRefs}
\`\`\`

2. Исправьте конфликты, следуя инструкциям из терминала
3. Отправьте ветку на GitHub и создайте новый PR с последней стабильной веткой (метка patch не нужна)

\`\`\`bash
git push --set-upstream origin patch/pr${pullNumber}
gh pr create --base ${stableBranchRef} --title "patch: pr${pullNumber}" --body "- patch #${pullNumber}"
\`\`\`
`;
}
