import * as React from 'react';
import { Caption } from '../components/Typography/Caption/Caption';
import './Placeholder.css';

export const Placeholder = () => {
  return (
    <div className="Placeholder">
      <Caption className="Placeholder__text" weight="3">
        Поместите сюда любой компонент
      </Caption>
    </div>
  );
};
