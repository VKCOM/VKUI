/* eslint-disable */
/**
 * Returns type of HTML element by tag name
 * @example
 * type ElementType = GetElementByTagname<'div'> // HTMLDivElement
 */
type GetElementByTagName<
  Tagname extends keyof React.ReactHTML
> = React.ReactHTML[Tagname] extends React.DetailedHTMLFactory<infer A, infer E> ? E : HTMLElement;
