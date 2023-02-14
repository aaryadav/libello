import React from 'react';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import { styled } from '../stitches.config';
import { Box } from './base/box';
import CopyBtn from '../components/copyBtn';

const StyledPreview = styled(Box, {
    padding: '1rem',
    width: '50%',
    height: '100vh',
    overflow: 'none',
    zIndex: '0',
});

const Preview = (props) => {
    const markdown  = props.doc;
    return (
        <StyledPreview>
            <Box className='markdown-body' css={{ display: 'block', backgroundColor: 'white', color: 'black', fontFamily: '$sans', width: '100%', height: '100%', overflow: 'auto' }}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                        pre({ node, ...props }) { return <pre {...props} /> },
                        code({ node, inline, className, children, style, ...props }) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <CopyBtn codeText={String(children)}>
                                    <SyntaxHighlighter
                                        style={prism}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                </CopyBtn>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                >
                    {markdown}
                </ReactMarkdown>
            </Box>
        </StyledPreview>
    );
}

export default Preview;