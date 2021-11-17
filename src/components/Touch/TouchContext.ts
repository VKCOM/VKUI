import * as React from 'react';

/**
 * Контекст для компонентов, использующих Touch в качестве корневой обёртки,
 * и для которых важно не предотвращать вспылие тач-событий от дочерних компонентов
 */
const TouchRootContext: React.Context<boolean> = React.createContext<boolean>(false);

export default TouchRootContext;
