import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./emloyees-list.css";

const EmployeesList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <EmployeesListItem key={id} {...itemProps} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;

//   return <EmployeesListItem name={item.name} salary={item.salary} можна записати як
//   return <EmployeesListItem {...item}/>, щоб передати всі пропи
//   key={id} використовуємо для оптимізації швидкості роботи додатку, бо в разі зміни
//   конкретного елемента перерендириться не весь список, а конкретний елемент
//   key={id} - ключі повинні бути унікальними саме для цього списку елементів
//   key={id} - не використовуємо інструменти для рандомного генерування випадкових
//   значень як Math.random
