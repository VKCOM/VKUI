import * as React from 'react';

export const CompilingBadge = () => (
  <div
    style={{
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 16px',
      borderRadius: 24,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fontSize: 14,
      lineHeight: '20px',
    }}
  >
    Компиляция...
  </div>
);
