'use client'

import MarkdownViewer from '@/app/components/markdown-viewer/markdown';
import React, { useState,  } from 'react';
import Markdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');

  // Handle contenteditable div input
  const handleInput = (e:any) => {
    setMarkdown(e.target.innerText);
  };

  console.log(markdown)

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        {/* Editable div where user writes markdown */}
        <div
          className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
          contentEditable
          onInput={handleInput}
          style={{ minHeight: '150px' }}
        >
        </div>

        {/* Styled Markdown preview */}
        <div className="w-full p-4 border rounded-md bg-white">
        <MarkdownViewer content={markdown} />
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
