import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("제목을 입력하세요!");
    if (!content.trim()) return alert("내용을 입력하세요!");

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>내용: </label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button>추가</button>
    </form>
  );
}
