import { RowElement, RowID } from "./interface";
/**
 * Inserts a new row into the database.
 * @param row - The row to insert.
 * @returns The ID of the inserted row.
 */
function insertRow(row: RowElement): number;

/**
 * Retrieves a row from the database by its ID.
 * @param rowId - The ID of the row to retrieve.
 * @returns The row with the specified ID.
 */
function deleteRow(rowId: RowID);

/**
 * Updates a row in the database.
 * @param rowId - The ID of the row to update.
 * @param row - The new data for the row.
 * @returns The ID of the updated row.
 */
function updateRow(rowId: RowID, row: RowElement);
