import React from "react";
import css from "./styles.module.css";

interface InputProps {
  value: string;
  taskChange: (v: string) => void;
  taskSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export class Input extends React.Component<InputProps> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.taskChange(e.target.value);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    this.props.taskSubmit(e);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={css.input}
          type="text"
          placeholder="Введите задание"
          value={this.props.value}
          onChange={this.handleChange}
        ></input>
        <button className={css.input} type="submit">добавить</button>
      </form>
    );
  }
}
