import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const { id, title, content, isDone } = todo;

  const handleClickDeleteBtn = (id) => {
    dispatch(deleteTodo({ id }));
  }

  const handleClickToggleBtn = (id) => {
    dispatch(toggleTodo({ id }));
  };

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {title}</p>
        <p>내용: {content}</p>
      </section>
      <section>
        <button onClick={() => handleClickToggleBtn(id)}>{isDone ? "취소" : "완료"}</button>
        <button onClick={() => handleClickDeleteBtn(id)}>삭제</button>
      </section>
    </li>
  );
}
