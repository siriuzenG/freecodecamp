function checkCashRegister(price, cash, cid) {
    const currencyUnitValues = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100,
    };

    let changeNeeded = cash - price;
    let changeAvailable = 0;
    const change = [];

    // Calculate the total cash available in the drawer
    cid.forEach(cash => {
        changeAvailable += cash[1];
    });
    changeAvailable = Number(changeAvailable.toFixed(2)); // Fix floating point precision issue

    // Handle different cases and calculate change
    if (changeNeeded > changeAvailable) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (changeNeeded === changeAvailable) {
        return { status: "CLOSED", change: cid };
    } else {
        for (let i = cid.length - 1; i >= 0; i--) {
            const currencyUnit = cid[i][0];
            const currencyValueBased = currencyUnitValues[currencyUnit];
            let currencyAmountInCID = cid[i][1];
            let numNeeded = Math.floor(changeNeeded / currencyValueBased);

            if (numNeeded > 0) {
                let numToUse =
                    numNeeded <= currencyAmountInCID / currencyValueBased
                        ? numNeeded
                        : currencyAmountInCID / currencyValueBased;
                let amountToSubtract = numToUse * currencyValueBased;
                changeNeeded -= amountToSubtract;
                changeNeeded = Number(changeNeeded.toFixed(2)); // Fix floating point precision issue
                cid[i][1] -= amountToSubtract;
                change.push([currencyUnit, amountToSubtract]);
            }
        }

        if (changeNeeded > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
    }

    return { status: "OPEN", change: change };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);