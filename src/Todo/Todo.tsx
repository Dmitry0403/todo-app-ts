import React from "react";
import { Tasks } from "../Tasks/Tasks";
import { Input } from "../Input/Input";
import { FilterList } from "../Filter/Filter";

interface State {
  value: string;
  tasksArray: {
    title: string;
    isChecked: boolean;
    id: number;
  }[];
  isFilter: boolean;
  select: string;
}

export class ToDo extends React.Component<{}, State> {
  state: State = {
    value: "",
    tasksArray: [],
    isFilter: false,
    select: "all",
  };

  handleChange = (value: string) => {
    this.setState({ value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { value } = this.state;
    if (value.trim()) {
      const { tasksArray } = this.state;
      this.setState({
        tasksArray: tasksArray.concat([
          { title: value, isChecked: false, id: Date.now() },
        ]),
        value: "",
      });
    }
    e.preventDefault();
  };

  handleCheckbox = (id: number) => {
    const { tasksArray } = this.state;
    tasksArray.map((task) => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
      return task;
    });
    this.setState({
      tasksArray,
    });
  };

  handleFilterChange = () => {
    const { isFilter } = this.state;
    this.setState({
      isFilter: !isFilter,
    });
  };

  handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const select = e.target.value;
    this.setState({
      select,
    });
  };
  render() {
    const { tasksArray: tasks, select, value, isFilter } = this.state;
    let selectTasks: {
      title: string;
      isChecked: boolean;
      id: number;
    }[] = [];
    if (select === "all") {
      selectTasks = tasks;
    } else if (select === "todo") {
      selectTasks = tasks.filter((task) => !task.isChecked);
    } else if (select === "done") {
      selectTasks = tasks.filter((task) => task.isChecked);
    }
    return (
      <div>
        <h1>Список дел</h1>
        <Input
          value={value}
          taskChange={this.handleChange}
          taskSubmit={this.handleSubmit}
        />
        <FilterList
          isFilter={isFilter}
          onChange={this.handleFilterChange}
          onSelect={this.handleSelect}
          selected={select}
        />
        <Tasks tasksArray={selectTasks} onChange={this.handleCheckbox} />
      </div>
    );
  }
}
