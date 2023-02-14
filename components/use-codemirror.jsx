import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { basicSetup, minimalSetup } from 'codemirror'
import { EditorState, Compartment } from '@codemirror/state'
import { EditorView, keymap, lineNumbers } from '@codemirror/view'
import { indentWithTab } from '@codemirror/commands'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { python } from '@codemirror/lang-python'

const useCodeMirror = (props) => {
    const refContainer = useRef();
    const [editorView, setEditorView] = useState();
    const { onChange } = props;

    useEffect(() => {
        if (!refContainer.current) return

        const startState = EditorState.create({ 
            doc: props.initDoc,
            extensions: [
                basicSetup,
                keymap.of([indentWithTab]),
                python(),
                markdown({
                    base: markdownLanguage,
                    codeLanguages: languages,
                    addKeymap: true
                }),
                vscodeDarkInit({
                    settings: {
                        background: '#252526',
                        foreground: '#fff',
                        fontFamily: '$mono',
                        selection: '#264F78',
                        gutterBackground: '#252526',                        
                    }
                }),
                EditorView.lineWrapping,
                EditorView.updateListener.of(update => {
                    if (update.changes) {
                        onChange && onChange(update.state)
                    }
                })
            ]
        })

        const view = new EditorView({
            state: startState,
            parent: refContainer.current
        })
        setEditorView(view)

        return () => {
            view.destroy()
        }
    }, [refContainer.current])

    return [refContainer, editorView]
}

export default useCodeMirror