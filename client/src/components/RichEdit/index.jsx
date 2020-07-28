import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { debounce } from './../../utils'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import {Button} from 'antd'
export default class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };
//   componentWillMount () {
//     const detail = this.props.detail
//     if (detail) {
//       // 根据detail生成一个editorState
//       const contentBlock = htmlToDraft(detail)
//       const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
//       const editorState = EditorState.createWithContent(contentState)
//       // 更新状态
//       this.setState({
//         editorState
//       })
//     }
//   }
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <div className="top"><Button type="primary" onClick={(e)=>{this.publish(e,editorState.getCurrentContent())}}>发布</Button></div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
         <textarea
          disabled
          value={draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}
        />
      </div>
    );
  }
  publish=(e,editorState)=>{
    console.log(e,editorState)
  }

}