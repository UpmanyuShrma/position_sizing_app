# Position Sizing Calculator

A web application that helps users calculate the appropriate position size (in lots) for options trading based on their risk tolerance, entry price, and stop-loss values. The app provides position sizing for multiple indices like **Nifty**, **Bank Nifty**, **FinNifty**, **Sensex**, **Nifty Midcap Select**, and **Bankex**.

## Features

- **User Input**: The app allows users to input the entry price, stop loss, and risk per trade.
- **Index Calculations**: The app calculates the number of lots you can buy/sell for the following indices:
  - Nifty
  - Bank Nifty
  - FinNifty
  - Sensex
  - Nifty Midcap Select
  - Bankex
- **Total Quantity**: It also shows the total quantity based on the user’s risk per trade.
- **Automatic Validation**: If the calculated lot size is less than 1, the app displays a "Don't Buy" message.
- **Simple UI**: Results are displayed in a clean and well-aligned table for easy reading.

## Formula Used

1. **Quantity Calculation**: 
   \[
   \text{Quantity} = \frac{\text{Risk}}{\text{Entry Price} - \text{Stop Loss}}
   \]
2. **Index Lots**:
   - Nifty: `Quantity / 25`
   - Bank Nifty: `Quantity / 15`
   - FinNifty: `Quantity / 25`
   - Sensex: `Quantity / 10`
   - Nifty Midcap Select: `Quantity / 50`
   - Bankex: `Quantity / 15`

## Usage

1. Input the Entry Price, Stop Loss, and Risk Per Trade values in the respective fields.
2. Click on Calculate Position Size.
3. The app will display the calculated lots for each index, and if the lot size is less than 1, it will show "Don't Buy."

## Project Structure

- index.html         # Main HTML file with the form and table for results
- styles.css         # External CSS for styling the UI
- app.js             # JavaScript for calculations and event handling

## Future Enhancements

1. Add support for additional indices.
2. Option to download results as a PDF or CSV.
3. Allow users to change the lot size for each index as per exchange regulations.

