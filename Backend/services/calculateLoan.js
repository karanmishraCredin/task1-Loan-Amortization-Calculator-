export default function calculateLoan(principal, yearlyRate, years) {
    const P = Number(principal);
    const r = Number(yearlyRate) / 100 / 12; 
    const n = Number(years) * 12;

    let monthlyPayment;

    if (r === 0) {
        monthlyPayment = P / n;
    } else {
        monthlyPayment =
            P * (r * Math.pow(1 + r, n)) /
            (Math.pow(1 + r, n) - 1);
    }
    monthlyPayment = Number(monthlyPayment.toFixed(2));

    const schedule = [];
    let balance = P;

    for (let i = 1; i <= n; i++) {
        const interestPayment = balance * r;
        let principalPayment = monthlyPayment - interestPayment;

        if (i === n) {
            principalPayment = balance;
        }

        balance -= principalPayment;

        schedule.push({
            paymentNumber: i,
            interestPaid: Number(interestPayment.toFixed(2)),
            principalPaid: Number(principalPayment.toFixed(2)),
            remainingBalance: Number(balance < 0 ? 0 : balance.toFixed(2))
        });

        if (balance <= 0) balance = 0;
    }

    return {
        principal: P,
        yearlyRate,
        years,
        monthlyPayment,
        schedule
    };
}
