import React from 'react';
import { Setting } from './Setting/Setting';

export const IntegrationSelect = ({ onChange, value }) => (
  <Setting
    onChange={onChange}
    value={value}
    label="Тип интеграции"
    options={['full', 'embedded']}
  />
);
