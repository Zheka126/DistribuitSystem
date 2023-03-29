import "./module";
import "./scss/index.scss";
import { Excel } from "./Components/excel/Excel";
import { Header } from "./Components/header/Header";
import { Formula } from "./Components/formula/Formula";
import { Toolbar } from "./Components/toolbar/Toolbar";
import { Table } from "./Components/table/Table";

console.log("working");

const excel = new Excel("#app", {
  components: [Header, Formula, Toolbar, Table],
});

excel.render();
