import { Link, Text } from '@vkontakte/vkui';

export default function Copyright() {
  return (
    <Text>
      {'Copyright © '}
      <Link color="inherit" href="https://vkcom.github.io/VKUI/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Text>
  );
}
