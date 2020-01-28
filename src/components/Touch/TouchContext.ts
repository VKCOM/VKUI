import { Context, createContext } from 'react';

/**
 * Контекст для компонентов, использующих Touch в качестве корневой обёртки,
 * и для которых важно не предотвращать вспылие тач-событий от дочерних компонентов
 */
const TouchRootContext: Context<boolean> = createContext<boolean>(false);

export default TouchRootContext;
