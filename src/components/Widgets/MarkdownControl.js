import React, { PropTypes } from 'react';
import { stateToMarkdown } from 'draft-js-export-markdown';
import TextareaAutosize from 'react-autosize-textarea';


export default class MarkdownControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: props.value || ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(editorState) {
    const content = editorState.getCurrentContent();
    this.setState({ editorState });
    this.props.onChange(stateToMarkdown(content));
  }

  render() {
    const { editorState } = this.state;
    return (
      <TextareaAutosize
          style={{width: '100%'}}
          value={editorState}
          onChange={this.handleChange}
      />);
  }
}

MarkdownControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.node,
};
