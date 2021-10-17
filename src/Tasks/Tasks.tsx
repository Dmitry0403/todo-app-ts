import css from "./styles.module.css";

interface TasksProps {
  tasksArray: { id: number; isChecked: boolean; title: string }[];
  onChange: (v: number) => void;
}

export const Tasks: React.FC<TasksProps> = ({ tasksArray, onChange }) => {
  return (
    <ul className={css.listTasks}>
      {tasksArray.map((task) => (
        <li key={task.id}>
          <input
            className={css.checkbox}
            type="checkbox"
            onChange={() => onChange(task.id)}
            checked={task.isChecked}
          />
          <span>{task.title}</span>
        </li>
      ))}
    </ul>
  );
};
