/// <reference path="./crud.d.ts" />
import * as CRUD from "./crud.js";
import { RowElement, RowID } from "./interface";

let row: RowElement = {
  firstName: "Habeeb",
  lastname: "Suleiman",
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  firstName: "Habeeb",
  lastname: "Suleiman",
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
