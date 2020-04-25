function checkCashRegister(price, cash, cid) {
   let numbers = [];
   let currencyArray = [];
   const currency = [
      ['PENNY', 0.01],
      ['NICKEL', 0.05],
      ['DIME', 0.1],
      ['QUARTER', 0.25],
      ['DOLLAR', 1],
      ['FIVE', 5],
      ['TEN', 10],
      ['TWENTY', 20],
      ['HUNDRED', 100],
   ];

   let diff = cash;

   // for (let index = 0; index < 2; index++) {
   //    const element = currency[index];
   //    console.log(element);

   //    currencyArray.push(element);
   // }

   // console.log(`currencyArray: ${currencyArray}`);

   for (let index = 0; index < cid.length; index++) {
      const element = cid[index];

      numbers.push(element[1]);
   }

   const finalCid = numbers.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
   });

   const change = cash - price;
   if (change > finalCid) {
      return {
         status: 'INSUFFICIENT_FUNDS',
         change: [],
      };
   }

   if (finalCid === change) {
      return {
         status: 'CLOSED',
         change: cid,
      };
   } else {
      // console.log(diff);
      // console.log(cashAvailable);

      return {
         status: 'OPEN',
         change: change,
      };
   }

   return result;
}

console.log(
   checkCashRegister(19.5, 20, [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100],
   ])
);

console.log(
   checkCashRegister(19.5, 20, [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100],
   ])
);

// {status: "OPEN", change: [["QUARTER", 0.5]]}.

console.log(
   checkCashRegister(3.26, 100, [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100],
   ])
);
// status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

console.log(
   checkCashRegister(19.5, 20, [
      ['PENNY', 0.01],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0],
   ])
);
// {status: "INSUFFICIENT_FUNDS", change: []}

console.log(
   checkCashRegister(19.5, 20, [
      ['PENNY', 0.01],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 1],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0],
   ])
);
console.log(
   checkCashRegister(19.5, 20, [
      ['PENNY', 0.5],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0],
   ])
);
