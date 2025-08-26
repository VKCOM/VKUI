import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Code, getMdxComponents, Table, Td, Th, Tr } from '@vkontakte/vkui-docs-theme';
import { compileMdx } from 'nextra/compile';
import { MDXRemote } from 'nextra/mdx-remote';
import { type PropItem } from 'react-docgen-typescript';
import docgen from '@/docgen.json';
import styles from './PropsTable.module.css';

const Paragraph = getMdxComponents().p!;

const AllProps: Record<string, PropItem[]> = docgen;

interface PropsTableProps {
  name: string | string[];
  children?: React.ReactElement<{ children: string }>;
}

export function PropsTable({ name, children }: PropsTableProps) {
  if (!name) {
    return null;
  }

  if (!children && typeof name === 'string') {
    const componentName = name.split('/').pop();
    return renderProps(AllProps[componentName || name]);
  }

  if (!children) {
    return null;
  }

  return React.Children.map(children, (child) => {
    const componentName = child.props.children;
    const componentProps = AllProps[componentName];

    return (
      <div key={child.key || componentName}>
        {child}
        {renderProps(componentProps)}
      </div>
    );
  });
}

function renderProps(props: PropItem[] = []) {
  if (props.length === 0) {
    return <Paragraph>Не принимает свойств</Paragraph>;
  }

  return (
    <Table className={styles.root}>
      <thead>
        <Tr>
          <Th>Свойство</Th>
          <Th>Описание</Th>
        </Tr>
      </thead>
      <tbody>
        {props.map(async (prop) => {
          const deprecated = (
            prop.tags && 'deprecated' in prop.tags ? prop.tags.deprecated : undefined
          ) as string | undefined;
          return (
            <Tr key={prop.name}>
              <TablePropColumn name={prop.name} required={prop.required} deprecated={deprecated} />
              <TableDescriptionColumn
                type={prop.type.raw || prop.type.name}
                description={prop.description}
                defaultValue={prop.defaultValue || '-'}
                deprecated={deprecated}
              />
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
}

interface TablePropColumnProps {
  name: string;
  required?: boolean;
  deprecated?: string;
}

function TablePropColumn({ name, required, deprecated }: TablePropColumnProps) {
  return (
    <Td
      className={classNames(
        styles.td,
        styles.propName,
        required && styles.propRequired,
        deprecated && styles.propDeprecated,
      )}
    >
      <Code>{name}</Code>
    </Td>
  );
}

interface TableDescriptionColumnProps {
  type?: string;
  description?: string;
  defaultValue?: string;
  deprecated?: string;
}

async function TableDescriptionColumn({
  type,
  description,
  defaultValue,
  deprecated,
}: TableDescriptionColumnProps) {
  return (
    <Td className={classNames(styles.td, styles.propDescription)}>
      <Code>{type}</Code>
      <MDXRemote
        compiledSource={await compileMdx(
          `${deprecated ? `\n\n**Deprecated**: ${deprecated}` : description}`,
        )}
        components={{
          pre: (props) => <pre {...props} />,
        }}
      />
      <div className={styles.propDefault}>
        <b>По умолчанию:</b> <Code>{defaultValue}</Code>
      </div>
    </Td>
  );
}
