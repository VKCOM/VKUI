```jsx
  <div style={{ padding: '10px 0' }}>
    {window.avatarSizes.map((size, index) => (
      <Avatar 
        size={size}
        src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" 
        style={{ 
          margin: 'auto',
          marginBottom: 8,
          textAlign: 'center', 
          lineHeight: `${size}px`,
          fontSize: 14
        }} 
        key={`${size}`} 
      />
    ))}
  </div>
```
