function calculateRatios() {
    const totalIncome = parseFloat(document.querySelector('input[placeholder="Enter Total Income"]').value) || 0;
    let totalExpenses = 0;

    // Iterate over expense inputs to sum expenses
    const expenseInputs = document.querySelectorAll('input[placeholder="Enter Current"]');
    expenseInputs.forEach((input) => {
        totalExpenses += parseFloat(input.value) || 0;
    });

    const frontEndRatio = ((totalExpenses / totalIncome) * 100).toFixed(2);
    const backEndRatio = (((totalExpenses + 200) / totalIncome) * 100).toFixed(2); // Assuming a fixed debt payment of $200

    document.getElementById('front-end-ratio').innerText = frontEndRatio + '%';
    document.getElementById('back-end-ratio').innerText = backEndRatio + '%';
}
