"use client";

import Highlight from "@tiptap/extension-highlight";
import { TextAlign } from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import Placeholder from "@tiptap/extension-placeholder";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import Heading from "@tiptap/extension-heading";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import React from "react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";
import ToggleDemo from "./toggle";
import { TTipTapProps } from "@/lib/types/component-props";

// Menu bar component
const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  // Buttons list
  const buttons = [
    {
      icon: <Heading1 />,
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 />,
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 />,
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive("heading", { level: 3 }),
      className: "hidden sm:block",
    },
    {
      icon: <Bold />,
      action: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
    },
    {
      icon: <Italic />,
      action: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
    },
    {
      icon: <Strikethrough />,
      action: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
    },
    {
      icon: <Highlighter />,
      action: () => editor.chain().focus().toggleHighlight().run(),
      pressed: editor.isActive("highlight"),
      className: "hidden sm:block",
    },
    {
      icon: <AlignLeft />,
      action: () => editor.chain().focus().setTextAlign("left").run(),
      pressed: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <AlignCenter />,
      action: () => editor.chain().focus().setTextAlign("center").run(),
      pressed: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <AlignRight />,
      action: () => editor.chain().focus().setTextAlign("right").run(),
      pressed: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <List />,
      action: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered />,
      action: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive("orderedList"),
    },
  ];

  return (
    <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white px-5 py-1 dark:bg-zinc-900">
      {/* Tip tap buttons bar */}
      {buttons.map(({ icon, action, pressed, className = "" }, index) => (
        <ToggleDemo
          action={action}
          pressed={pressed}
          key={index}
          className={className}
        >
          {icon}
        </ToggleDemo>
      ))}
    </div>
  );
};

// text area component
export default function Tiptap({ onChange, setPost, className }: TTipTapProps) {
  //Hook to handle tip tap options
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Typography,
      StarterKit.configure({
        bulletList: { HTMLAttributes: { class: "list-disc ml-4" } },
        orderedList: { HTMLAttributes: { class: "list-decimal ml-4" } },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        defaultAlignment: "left",
      }),
      Placeholder.configure({
        placeholder: "Enter Your Message...",
      }),

      Heading.configure({
        levels: [1, 2, 3],
      }),
      Highlight,
    ],

    onUpdate: () => {
      if (editor?.getHTML()) setPost(editor.getHTML());
      if (editor?.getText()) onChange(editor?.getText());
    },
    editorProps: {
      attributes: {
        class: `${className}`,
      },
    },
  });

  return (
    <>
      <div className="textEditor mx-auto flex flex-col gap-3 sm:w-3/4">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </>
  );
}
