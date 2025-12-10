import { Link, Text } from '@vkontakte/vkui';

export default function Copyright() {
  return (
    <Text>
      {'Авторские права © '}
      <Link color="inherit" href="https://vkui.io/">
        Ваш сайт
      </Link>{' '}
      {new Date().getFullYear()}.
    </Text>
  );
}
