import React, {useState} from 'react';
import { ThemeProvider } from 'react-jss';
import { markdownThemeOptions } from '../theme';
import { MarkdownEditor } from "../MarkdownEditor";
import { defaultMarkdownText } from "../constants";

export const MarkDownApp = () => {
  const [markdown, setmarkdown] = useState(defaultMarkdownText);
  const [value, setValue] = useState('');
  const themeObj = value
  ? markdownThemeOptions.themes.find(item => item.value === value)
  : {};

  const updateMarkdown = e => setmarkdown(e.target.value);
  const handleDropdown = e => setValue(e.value);

  return (
    <ThemeProvider theme={themeObj}>
        <MarkdownEditor
        handleDropdown={handleDropdown}
        updateMarkdown={updateMarkdown}
        markdown={markdown}
        themeObj={themeObj}
      />
    </ThemeProvider>
  );
};