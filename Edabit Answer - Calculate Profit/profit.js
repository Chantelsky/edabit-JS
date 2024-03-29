// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar. Assume all of the inventory has been sold.

// Examples
// profit({
//   costPrice: 32.67,
//   sellPrice: 45.00,
//   inventory: 1200
// }) ➞ 14796

// profit({
//   costPrice: 225.89,
//   sellPrice: 550.00,
//   inventory: 100
// }) ➞ 32411

// profit({
//   costPrice: 2.77,
//   sellPrice: 7.95,
//   inventory: 8500
// }) ➞ 44030
// Notes
// Profit = Total Sales - Total Cost

const profit = info => Math.round((info.sellPrice - info.costPrice) * info.inventory);