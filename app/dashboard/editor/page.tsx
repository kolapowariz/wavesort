'use client'
import { useState } from "react"
import ReactMarkdown from 'react-markdown'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css'

const mdParser = new MarkdownIt();

export default function Editor() {
  const [markdown, setmarkdown] = useState<string>('');

  const handleEditorChange = ({ text }: { text: string }) => {
    setmarkdown(text);
  }
  return (
    <div>
      <h1>Markdown Editor</h1>
      <MdEditor value={markdown} onChange={handleEditorChange} renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown> } className="h-96 grid grid-cols-1" />
    </div>
  )
}