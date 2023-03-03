export const selectors = {
    dashBoard: '.dashboard__content',
    billInput: '.dashboard__input_type_billInput',
    numberOfPeopleInput: '.dashboard__input_numberInput',
    customPercentInput: '.dashboard__input_type_selectTipInput',
    percentButton: '.dashboard__button',
    tipAmount: '#tipAmountInput',
    totalPrice: '#totalInput',
    resetButton: '.dashboard__resetButton',
    billCountErrorMessage: '.dashboard__errorMessage_type_billCount',
    numberOfPeopleErrorMessage: '.dashboard__errorMessage_type_numberOfPeople',
    errorMessageActive: 'dashboard__errorMessage_active',
    inputErrorMessage: 'dashboard__input_type_error',
    buttonClassActive: 'dashboard__button_type_active',
    resetButtonInactive: 'dashboard__resetButton_type_inactive'
}

export const dashBoard = document.querySelector(selectors.dashBoard);
export const billInput = dashBoard.querySelector(selectors.billInput);
export const numberOfPeopleInput = dashBoard.querySelector(selectors.numberOfPeopleInput);
export const customPercentInput = dashBoard.querySelector(selectors.customPercentInput);
export const percentButtons = dashBoard.querySelectorAll(selectors.percentButton);
export const tipAmount = dashBoard.querySelector(selectors.tipAmount);
export const totalPrice = dashBoard.querySelector(selectors.totalPrice);
export const resetButton = dashBoard.querySelector(selectors.resetButton);
export const billCountErrorMessage = dashBoard.querySelector(selectors.billCountErrorMessage);
export const numberOfPeopleErrorMessage = dashBoard.querySelector(selectors.numberOfPeopleErrorMessage);


