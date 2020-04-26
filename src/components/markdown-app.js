import React, {useState} from 'react';
import { ThemeProvider } from 'react-jss';
import { markdownThemeOptions } from '../theme';
import { MarkdownEditor } from "../MarkdownEditor";
import { defaultMarkdownText } from "../constants";

export const MarkDownApp = () => {
  const [markdown, setmarkdown] = useState(defaultMarkdownText);
  const [theme, setTheme] = useState('');
  const themeObj = theme
  ? markdownThemeOptions.themes.find(item => item.value === theme)
  : {};

  const updateMarkdownArea = e => setmarkdown(e.target.value);
  const handleDropdown = e => setTheme(e.value);

  return (
    <ThemeProvider theme={themeObj}>
        <MarkdownEditor
        handleDropdown={handleDropdown}
        updateMarkdown={updateMarkdownArea}
        markdown={markdown}
        themeObj={themeObj}
      />
    </ThemeProvider>
  );
};