// components/MarkdownViewer.tsx
'use client'

import React from 'react';
import Markdown from 'react-markdown';

interface MarkdownViewerProps {
    content: string; // The Markdown content to render
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {
    return (
        <div className="markdown-preview">
            <Markdown
                components={{
                    h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mb-4" {...props}>{props.children}</h1>,
                    h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold mb-3" {...props}>{props.children}</h2>,
                    h3: ({ node, ...props }) => <h3 className="text-2xl font-medium mb-2" {...props}>{props.children}</h3>,
                    h4: ({ node, ...props }) => <h4 className="text-xl font-medium mb-2" {...props}>{props.children}</h4>,
                    h5: ({ node, ...props }) => <h5 className="text-lg font-medium mb-1" {...props}>{props.children}</h5>,
                    h6: ({ node, ...props }) => <h6 className="text-base font-medium mb-1" {...props}>{props.children}</h6>,

                    p: ({ node, ...props }) => <p className="text-base leading-relaxed mb-4" {...props}>{props.children}</p>,

                    a: ({ node, ...props }) => <a className="text-blue-500 underline hover:text-blue-700" {...props}>{props.children}</a>,

                    strong: ({ node, ...props }) => <strong className="font-bold" {...props}>{props.children}</strong>,

                    em: ({ node, ...props }) => <em className="italic" {...props}>{props.children}</em>,

                    blockquote: ({ node, ...props }) => (
                        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 my-4" {...props}>{props.children}</blockquote>
                    ),

                    ul: ({ node, ...props }) => <ul className="list-disc list-inside pl-5 mb-4" {...props}>{props.children}</ul>,
                    ol: ({ node, ...props }) => <ol className="list-decimal list-inside pl-5 mb-4" {...props}>{props.children}</ol>,
                    li: ({ node, ...props }) => <li className="mb-1" {...props}>{props.children}</li>,

                    // Styles for inline code
                    code: ({ node, className, ...props }) => (
                        <code className={`bg-gray-200 text-gray-800 rounded-md p-1 ${className}`} {...props} />
                    ),

                    // Styles for code blocks
                    pre: ({ node, ...props }) => (
                        <pre className="bg-gray-100 p-4 rounded-md overflow-auto my-4" {...props}>
                            <code className="text-sm">{props.children}</code>
                        </pre>
                    ),
                }}
            >
                {content}
            </Markdown>
        </div>
    );
};

export default MarkdownViewer;
