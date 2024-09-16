import { Icon12Education } from '@vkontakte/icons';
import { Caption } from '../../components/Typography/Caption/Caption';
import { DisplayTitle } from '../../components/Typography/DisplayTitle/DisplayTitle';
import { Text } from '../../components/Typography/Text/Text';

export const createCalendarDayRenderField = () => {
  return {
    control: 'select' as const,
    options: ['None', 'DayWithDayName', 'DayWithIcon'],
    mapping: {
      None: undefined,
      DayWithDayName: (date: Date) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <DisplayTitle level="4" weight="2">
              {date.getDate()}
            </DisplayTitle>
            <Caption caps level="2" weight="3">
              {date.toLocaleDateString('ru-RU', { weekday: 'short' })}
            </Caption>
          </div>
        );
      },
      DayWithIcon: (date: Date) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text>{date.getDate()}</Text>
            <Icon12Education />
          </div>
        );
      },
    },
  };
};
