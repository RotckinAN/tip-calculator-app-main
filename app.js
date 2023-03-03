import {
    billCountErrorMessage,
    billInput,
    customPercentInput,
    numberOfPeopleErrorMessage,
    numberOfPeopleInput,
    percentButtons,
    resetButton,
    selectors,
    tipAmount,
    totalPrice
} from "./utils/constants.js";

const values = { billCount: 0, numbersOfPeople: 0, buttonPercent: 0, customPercent: 0 }

const writeValue = () => {
    const { billCount, numbersOfPeople, buttonPercent, customPercent } = values;
    let percents = 0;

    if (!billCount || !numbersOfPeople) {
        return undefined;
    }

    if (buttonPercent) {
        percents = buttonPercent;
    } else {
        percents = customPercent;
    }

    const tipAmountValue = (billCount * percents / 100) / numbersOfPeople;
    const totalAmount = (tipAmountValue * numbersOfPeople + billCount) / numbersOfPeople;
    tipAmount.textContent = `$${tipAmountValue.toFixed(2)}`;
    totalPrice.textContent = `$${totalAmount.toFixed(2)}`;

    resetButton.classList.remove(selectors.resetButtonInactive)
}

const addErrorMessage = (value, errorMessage, input) => {
    if (value.indexOf('0') === 0) {
        errorMessage.classList.add(selectors.errorMessageActive);
        input.classList.add(selectors.inputErrorMessage);
    } else {
        errorMessage.classList.remove(selectors.errorMessageActive);
        input.classList.remove(selectors.inputErrorMessage);
    }
}

const getBillCount = (evt) => {
    if (evt.target.value > 7) {
        evt.target.value = evt.target.value.slice(0, 7)
    } else if (evt.target.value.indexOf('-') === 0) {
        evt.target.value = evt.target.value.slice(1)
    }
    const value = evt.target.value;
    addErrorMessage(value, billCountErrorMessage, billInput)

    values.billCount = Number(value);
    writeValue();
}

const getNumberOfPeopleCount = (evt) => {
    if (evt.target.value > 3) {
        evt.target.value = evt.target.value.slice(0, 3)
    }

    const value = evt.target.value;
    addErrorMessage(value, numberOfPeopleErrorMessage, numberOfPeopleInput)

    values.numbersOfPeople = Number(value);
    writeValue();
}

const getCustomPercent = (evt) => {
    if (evt.target.value > 2) {
        evt.target.value = evt.target.value.slice(0, 2)
    } else if (evt.target.value.indexOf('-') === 0) {
        evt.target.value = evt.target.value.slice(1, 3)
    }

    if (evt.target.value) {
        percentButtons.forEach((btn) => btn.classList.remove(selectors.buttonClassActive));
    }

    values.buttonPercent = 0;
    values.customPercent = Number(evt.target.value);
    writeValue();
}

percentButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
        if (button.classList.contains(selectors.buttonClassActive)) {
            button.classList.remove(selectors.buttonClassActive)
        } else {
            percentButtons.forEach((btn) => btn.classList.remove(selectors.buttonClassActive));

            button.classList.add(selectors.buttonClassActive);

            values.buttonPercent = Number(evt.target.innerText.slice(0, -1));
            writeValue();
        }
    });
});

const getResetButton = () => {
    resetButton.classList.add(selectors.resetButtonInactive);
    values.billCount = 0;
    values.numbersOfPeople = 0;
    values.buttonPercent = 0;
    values.customPercent = 0;
    billInput.value = '';
    numberOfPeopleInput.value = '';
    customPercentInput.value = '';
    percentButtons.forEach((btn) => btn.classList.remove(selectors.buttonClassActive));
    tipAmount.textContent = '$0.00';
    totalPrice.textContent = '$0.00';
}

billInput.addEventListener('input', getBillCount);
customPercentInput.addEventListener('input', getCustomPercent);
numberOfPeopleInput.addEventListener('input', getNumberOfPeopleCount);
resetButton.addEventListener('click', getResetButton);
