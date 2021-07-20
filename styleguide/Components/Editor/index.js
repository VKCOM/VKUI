import React, { Component } from 'react';
import 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import Styled from '@rsg-components/Styled';
import Editor from '@rsg-components/Editor/Editor';
import prismTheme from '../prismTheme';
import './Editor.css';
import { Tappable } from '@vkui';
import { Icon28CopyOutline } from '@vkontakte/icons';

const styles = ({ color }) => ({
  root: {
    ...prismTheme({ color }),
    '& textarea': {
      padding: '12px 16px !important', // Editor перезатирает padding без !important, так что иначе никак
    },
    '& pre': {
      padding: '12px 16px !important', // Editor перезатирает padding без !important, так что иначе никак
    },
  },
});

export class EditorWrapper extends Component {
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
        <div className="Editor__inner">
          <Editor {...this.props} />
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line new-cap
export default Styled(styles)(EditorWrapper);
