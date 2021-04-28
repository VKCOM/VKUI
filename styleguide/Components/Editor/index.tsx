import React, { Component } from 'react';
import SimpleEditor from 'react-simple-code-editor';
// @ts-ignore
import { highlight as prismHighlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import Styled, { JssInjectedProps } from '@rsg-components/Styled';
import prismTheme from '../prismTheme';
import './Editor.css';
import { Tappable } from '@vkui';
import { Icon28CopyOutline } from '@vkontakte/icons';

const highlight = (code: string) => prismHighlight(code, languages.jsx, 'jsx');

const styles = ({ color }) => ({
  root: {
    ...prismTheme({ color }),
  },
});

export interface EditorProps extends JssInjectedProps {
  code: string;
  onChange: (code: string) => void;
}

interface EditorState {
  code: string;
  prevCode: string;
}

export class Editor extends Component<EditorProps> {
  public state = { code: this.props.code, prevCode: this.props.code };

  public static getDerivedStateFromProps(nextProps: EditorProps, prevState: EditorState) {
    const { code } = nextProps;
    if (prevState.prevCode !== code) {
      return {
        prevCode: code,
        code,
      };
    }
    return null;
  }

  public shouldComponentUpdate(nextProps: EditorProps, nextState: EditorState) {
    return nextState.code !== this.state.code;
  }

  private handleChange = (code: string) => {
    this.setState({ code });
    this.props.onChange(code);
  };

  private onCopyClick = () => {
    navigator.clipboard.writeText(this.state.code);
  }

  public render() {
    return (
      <div className="Editor">
        {navigator.clipboard &&
          <Tappable hoverMode="opacity" activeMode="opacity" className="Editor__copy" onClick={this.onCopyClick}>
            <Icon28CopyOutline />
          </Tappable>
        }
        <SimpleEditor
          className={this.props.classes.root}
          value={this.state.code}
          onValueChange={this.handleChange}
          highlight={highlight}
        />
      </div>
    );
  }
}

export default Styled<EditorProps>(styles)(Editor);
