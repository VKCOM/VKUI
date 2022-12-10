import React, { Component } from 'react';
import 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import Editor from '@rsg-components/Editor/Editor';
import './Editor.css';
import { Tappable } from '@vkui';
import { Icon28CopyOutline } from '@vkontakte/icons';

export class EditorWrapper extends Component {
  onCopyClick = () => {
    navigator.clipboard.writeText(this.props.code);
  };

  render() {
    return (
      <div className="Editor">
        {navigator.clipboard && (
          <Tappable
            hoverMode="opacity"
            activeMode="opacity"
            className="Editor__copy"
            onClick={this.onCopyClick}
          >
            <Icon28CopyOutline />
          </Tappable>
        )}
        <div className="Editor__inner">
          <Editor {...this.props} />
        </div>
      </div>
    );
  }
}

export default EditorWrapper;
