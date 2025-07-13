/**
 * Inserts a new row into the database.
 * @param row - The row to insert.
 * @returns The ID of the inserted row.
 */
export function insertRow(row) {
  console.log("Insert row", row);
  return Math.floor(Math.random() * Math.floor(1000));
}

/**
 * Retrieves a row from the database by its ID.
 * @param rowId - The ID of the row to retrieve.
 * @returns The row with the specified ID.
 */
export function deleteRow(rowId) {
  console.log("Delete row id", rowId);
  return;
}

/**
 * Updates a row in the database.
 * @param rowId - The ID of the row to update.
 * @param row - The new data for the row.
 * @returns The ID of the updated row.
 */
export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
