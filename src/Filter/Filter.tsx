import css from "./styles.module.css"

interface FilterProps {
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selected: string;
}

function Filter(props: FilterProps) {
  const titles: string[] = ["all", "todo", "done"];
  const {selected, onSelect} = props
  return (
    <select className={css.filter} onChange={onSelect}>
      {titles.map((item) => (
        <option value={item} selected={selected === item}>
          {item}
        </option>
      ))}
    </select>
  );
}

interface CheckboxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox(props: CheckboxProps) {
  return (
    <div>
      <input className={css.checkbox} type="checkbox" onChange={props.onChange} />
    </div>
  );
}

interface FilterListProps {
  isFilter: boolean;
  selected: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function FilterList(props: FilterListProps) {
  const { isFilter, selected, onChange, onSelect } = props;
  return (
    <div>
      <div className={css.filterList}>
        <legend>Фильтр дел</legend>
        <Checkbox onChange={onChange} />
      </div>
      {isFilter && (
        <div>
          <Filter onSelect={onSelect} selected={selected} />
        </div>
      )}
    </div>
  );
}
