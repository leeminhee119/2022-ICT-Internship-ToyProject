import React, { useState } from 'react';
import styled from 'styled-components';
import { themeColor } from './commonVariables';
// import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// draft-js 를 기반을 작성되었기 때문에 DOM에 EditorState type을 넣어주어야 한다.
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html';
import { EditorProps } from 'react-draft-wysiwyg'
import dynamic from "next/dynamic";


// Editor Component 가 받을 타입 지정, 런타임에서 라이브러리 불러오도록 (클라이언트에서만)
const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
    ssr: false,
})

interface PostArticleEditorInterface {
    getContent: any
}

const PostArticleEditor = (props: PostArticleEditorInterface) => {
    /* editor의 상태(입력내용 등의 히스토리)를 스냅샷으로 찍어 알려줌 (like 커밋) */
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty() // 처음엔 비어있는 상태로 에디터 상태 초기화
    );

    const handleEditorChange = (state:EditorState) => {
        setEditorState(state);
        sendContent();
    };

    const sendContent = () => {
        props.getContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };
    return (
        <>
        <div style={{minHeight: '600px', 
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '5px',
            padding: '20px',
            marginBottom: '20px'}}>
        <Editor
        editorState={editorState}  
        wrapperClassName="wrapper-class"
        toolbarClassName="toolbar-class"
        editorClassName="editor-class"
        onEditorStateChange={handleEditorChange}
        placeholder="공연후기를 작성해주세요."
        toolbar={{
            options: ['inline', 'list', 'textAlign', 'link'], // 원하는 옵션 선택
        }}
        localization={{
            locale: 'ko',
        }}
        />
        </div>
        </>
    )
}

export default PostArticleEditor