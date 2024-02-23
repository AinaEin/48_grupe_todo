import { Table } from "../components/Table.js";

// objektas po apacia

const todo = new Table(
  "main",
  "Homepage design",
  "Panašu, jog dar neturi jokių užduočių"
);

todo.addColumn("Backlog");
todo.addColumn("In progress");
todo.addColumn("Review");
todo.addColumn("Done");

// išsilogini, kad pasitikrintti ar suveikia
todo.renderColumns();

