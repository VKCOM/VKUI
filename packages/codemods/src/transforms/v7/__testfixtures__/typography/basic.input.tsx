import {
  Caption,
  DisplayTitle,
  Footnote,
  Headline,
  Paragraph,
  Subhead,
  Text,
  Title,
  Typography,
} from '@vkontakte/vkui';
import React from 'react';

export const App = () => {
  const flag = false;
  const calculateUseAccentWeight = () => false;
  return (
    <React.Fragment>

      {/* должен оставить как есть*/}
      <Typography />
      {/* должен оставить weight */}
      <Typography weight={undefined} />
      {/* должен добавить useAccentWeight */}
      <Typography weight='1' />
      {/* должен оставить weight и useAccentWeight */}
      <Typography weight='2' useAccentWeight />
      {/* должен убрать ={true} у useAccentWeight */}
      <Typography weight='3' useAccentWeight={true} />
      {/* должен оставить weight и убрать useAccentWeight так как false по умолчанию */}
      <Typography weight='1' useAccentWeight={false} />
      {/* должен оставить weight и useAccentWeight */}
      <Typography weight='2' useAccentWeight={flag && calculateUseAccentWeight} />
      {/* должен убрать useAccentWeight так как без weight не имеет смысла */}
      <Typography useAccentWeight />

      {/* Caption */}
      {/* должен оставить как есть*/}
      <Caption />
      {/* должен оставить weight */}
      <Caption weight={undefined} />
      {/* должен добавить useAccentWeight */}
      <Caption weight='1' />
      {/* должен оставить weight и useAccentWeight */}
      <Caption weight='2' useAccentWeight />
      {/* должен убрать ={true} у useAccentWeight */}
      <Caption weight='3' useAccentWeight={true} />
      {/* должен оставить weight и убрать useAccentWeight так как false по умолчанию */}
      <Caption weight='1' useAccentWeight={false} />
      {/* должен оставить weight и useAccentWeight */}
      <Caption weight='2' useAccentWeight={flag && calculateUseAccentWeight} />
      {/* должен убрать useAccentWeight так как без weight не имеет смысла */}
      <Caption useAccentWeight />

      {/* DisplayTitle */}
      {/* должен оставить как есть*/}
      <DisplayTitle />
      {/* должен оставить weight */}
      <DisplayTitle weight={undefined} />
      {/* должен добавить useAccentWeight */}
      <DisplayTitle weight='1' />
      {/* должен оставить weight и useAccentWeight */}
      <DisplayTitle weight='2' useAccentWeight />
      {/* должен убрать ={true} у useAccentWeight */}
      <DisplayTitle weight='3' useAccentWeight={true} />
      {/* должен оставить weight и убрать useAccentWeight так как false по умолчанию */}
      <DisplayTitle weight='1' useAccentWeight={false} />
      {/* должен оставить weight и useAccentWeight */}
      <DisplayTitle weight='2' useAccentWeight={flag && calculateUseAccentWeight} />
      {/* должен убрать useAccentWeight так как без weight не имеет смысла */}
      <DisplayTitle useAccentWeight />

      {/* Footnote */}
      {/* должен оставить как есть*/}
      <Footnote />
      {/* должен оставить weight */}
      <Footnote weight={undefined} />
      {/* должен добавить useAccentWeight */}
      <Footnote weight='1' />
      {/* должен оставить weight и useAccentWeight */}
      <Footnote weight='2' useAccentWeight />
      {/* должен убрать ={true} у useAccentWeight */}
      <Footnote weight='3' useAccentWeight={true} />
      {/* должен оставить weight и убрать useAccentWeight так как false по умолчанию */}
      <Footnote weight='1' useAccentWeight={false} />
      {/* должен оставить weight и useAccentWeight */}
      <Footnote weight='2' useAccentWeight={flag && calculateUseAccentWeight} />
      {/* должен убрать useAccentWeight так как без weight не имеет смысла */}
      <Footnote useAccentWeight />

      {/* Headline */}
      {/* должен оставить как есть*/}
      <Headline />
      {/* должен оставить weight */}
      <Headline weight={undefined} />
      {/* должен добавить useAccentWeight */}
      <Headline weight='1' />
      {/* должен оставить weight и useAccentWeight */}
      <Headline weight='2' useAccentWeight />
      {/* должен убрать ={true} у useAccentWeight */}
      <Headline weight='3' useAccentWeight={true} />
      {/* должен оставить weight и убрать useAccentWeight так как false по умолчанию */}
      <Headline weight='1' useAccentWeight={false} />
      {/* должен оставить weight и useAccentWeight */}
      <Headline weight='2' useAccentWeight={flag && calculateUseAccentWeight} />
      {/* должен убрать useAccentWeight так как без weight не имеет смысла */}
      <Headline useAccentWeight />

      {/* Paragraph */}
      {/* должен оставить как есть*/}
      <Paragraph />
      {/* должен оставить weight */}
      <Paragraph weight={undefined} />
      {/* должен добавить useAccentWeight */}
      <Paragraph weight='1' />
      {/* должен оставить weight и useAccentWeight */}
      <Paragraph weight='2' useAccentWeight />
      {/* должен убрать ={true} у useAccentWeight */}
      <Paragraph weight='3' useAccentWeight={true} />
      {/* должен оставить weight и убрать useAccentWeight так как false по умолчанию */}
      <Paragraph weight='1' useAccentWeight={false} />
      {/* должен оставить weight и useAccentWeight */}
      <Paragraph weight='2' useAccentWeight={flag && calculateUseAccentWeight} />
      {/* должен убрать useAccentWeight так как без weight не имеет смысла */}
      <Paragraph useAccentWeight />

      {/* Subhead */}
      {/* должен оставить как есть*/}
      <Subhead />
      {/* должен оставить weight */}
      <Subhead weight={undefined} />
      {/* должен добавить useAccentWeight */}
      <Subhead weight='1' />
      {/* должен оставить weight и useAccentWeight */}
      <Subhead weight='2' useAccentWeight />
      {/* должен убрать ={true} у useAccentWeight */}
      <Subhead weight='3' useAccentWeight={true} />
      {/* должен оставить weight и убрать useAccentWeight так как false по умолчанию */}
      <Subhead weight='1' useAccentWeight={false} />
      {/* должен оставить weight и useAccentWeight */}
      <Subhead weight='2' useAccentWeight={flag && calculateUseAccentWeight} />
      {/* должен убрать useAccentWeight так как без weight не имеет смысла */}
      <Subhead useAccentWeight />

      {/* Text */}
      {/* должен оставить как есть*/}
      <Text />
      {/* должен оставить weight */}
      <Text weight={undefined} />
      {/* должен добавить useAccentWeight */}
      <Text weight='1' />
      {/* должен оставить weight и useAccentWeight */}
      <Text weight='2' useAccentWeight />
      {/* должен убрать ={true} у useAccentWeight */}
      <Text weight='3' useAccentWeight={true} />
      {/* должен оставить weight и убрать useAccentWeight так как false по умолчанию */}
      <Text weight='1' useAccentWeight={false} />
      {/* должен оставить weight и useAccentWeight */}
      <Text weight='2' useAccentWeight={flag && calculateUseAccentWeight} />
      {/* должен убрать useAccentWeight так как без weight не имеет смысла */}
      <Text useAccentWeight />

      {/* Title */}
      {/* должен оставить как есть*/}
      <Title />
      {/* должен оставить weight */}
      <Title weight={undefined} />
      {/* должен добавить useAccentWeight */}
      <Title weight='1' />
      {/* должен оставить weight и useAccentWeight */}
      <Title weight='2' useAccentWeight />
      {/* должен убрать ={true} у useAccentWeight */}
      <Title weight='3' useAccentWeight={true} />
      {/* должен оставить weight и убрать useAccentWeight так как false по умолчанию */}
      <Title weight='1' useAccentWeight={false} />
      {/* должен оставить weight и useAccentWeight */}
      <Title weight='2' useAccentWeight={flag && calculateUseAccentWeight} />
      {/* должен убрать useAccentWeight так как без weight не имеет смысла */}
      <Title useAccentWeight />
    </React.Fragment>
  );
};