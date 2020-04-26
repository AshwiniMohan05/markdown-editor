import React from "react";
import marked from 'marked';
import styled from 'styled-components'
import Select from 'react-select';
import { markdownThemeOptions } from '../theme';
import "./markdown-editor.css";

const Container = styled.div`
  color: ${props => props.fontColor};
  background-color: ${props => props.background};
  font-size: ${props => props.fontSize};
`;

export const MarkdownEditor = ({handleDropdown, updateMarkdown, markdown, themeObj}) => (
    <React.Fragment>
        <h1 className="heading">MARK DOWN THEMING APP</h1>
        <Select
        className="theme-dropdown"
        options={markdownThemeOptions.themes}
        onChange={handleDropdown}
        placeholder="Select Theme..."
         />
      <div className="markdown-editor-wrapper">
        <textarea
          className="text-area"
          value={markdown}
          onChange={updateMarkdown}
        />
        {markdown && (
          <Container
            fontColor={themeObj.fontColor}
            background={themeObj.background}
            fontSize={themeObj.fontSize}
          >
            <div
              className="preview"
              dangerouslySetInnerHTML={{__html: marked(markdown)}}
            ></div>
          </Container>
        )}
      </div>
    </React.Fragment>
  );