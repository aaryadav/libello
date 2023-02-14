import { useState, useRef, useCallback } from 'react'
import useCodeMirror from './use-codemirror'
import { styled } from "../stitches.config";
import { Box, IconBox } from "./base/box";
import Editor from "./editor";

import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';


const MarkCell = (props) => {
    const { cell, cellType, handleUpdate, index, info } = props
    const [doc, setDoc] = useState(info)
    const [editMode, setEditMode] = useState(false)


    const handleDocChange = useCallback((newDoc) => {
        setDoc(newDoc)
        handleUpdate(newDoc, index)
    }, [])

    return (
        <>
            <Box className={cellType} css={{ width: "98%" }}
                onDoubleClick={() => {
                    setEditMode(true)
                }}
                onKeyDown={(e) => {
                    if (e.ctrlKey && e.key === 'Enter') {
                        setEditMode(false)
                        handleDocChange(doc)
                    }
                }}
            >
                <Box css={{ padding: '0 0 0 45px', borderLeft: "4px solid $violet8", borderRadius: "4px 0 0 4px" }}>
                </Box>
                {editMode ? (
                    <Box css={{
                        border: '1px solid #37373D',
                        backgroundColor: '#252526',
                        padding: '10px 0 25px 0',
                        width: '100%', fontSize: "18px"
                    }}>
                        <Editor initDoc={doc} onChange={handleDocChange} />
                    </Box>
                ) : (
                    <Box
                        css={{
                            display: 'block',
                            padding: '10px 0 25px 0',
                            width: '100%', fontSize: "",
                            lineHeight: "2",
                        }}>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            // rehypePlugins={[rehypeKatex]}
                            components={{
                                pre({ node, ...props }) { return <pre {...props} /> },
                                code({ node, inline, className, children, style, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            fontSize="18px"
                                            style={vscDarkPlus}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    )
                                }
                            }}
                        >
                            {doc}
                        </ReactMarkdown>
                    </Box>
                )}

            </Box>
        </>
    );
}

export default MarkCell;