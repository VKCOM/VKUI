import styles from '../../styles/animationFades.module.css'; // eslint-disable-line import/order

export const animationFadeClassNames: Record<'in' | 'out', string> = {
  in: styles['-anim-fade-in'],
  out: styles['-anim-fade-out'],
};
