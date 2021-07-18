import React, { Component } from 'react';
import SimpleEditor from 'react-simple-code-editor';
import { highlight as prismHighlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import Styled from '@rsg-components/Styled';
import prismTheme from '../prismTheme';
import './Editor.css';
import { Tappable } from '@vkui';
import { Icon28CopyOutline } from '@vkontakte/icons';

const highlight = (code) => prismHighlight(code, languages.jsx, 'jsx');

const styles = ({ color }) => ({
  root: {
    ...prismTheme({ color }),
  },
});

export class Editor extends Component {
  state = { code: this.props.code, prevCode: this.props.code };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { code } = nextProps;
    if (prevState.prevCode !== code) {
      return {
        prevCode: code,
        code,
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.code !== this.state.code;
  }

  handleChange = (code) => {
    this.setState({ code });
    this.props.onChange(code);
  };

  onCopyClick = () => {
    navigator.clipboard.writeText(this.state.code);
  }

  render() {
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

// eslint-disable-next-line new-cap
export default Styled(styles)(Editor);
