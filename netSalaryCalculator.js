function calculateGrossSalary(basicPay, benefits) {
  const grossSalary = basicPay + benefits;
  console.log("Your gross salary is: ", grossSalary);

  function calculateGrossSalaryMinusNSSF() {
    let grossSalaryMinusNSSF;

    if (grossSalary > 40000) {
      grossSalaryMinusNSSF = grossSalary - 15000;
    } else if (grossSalary > 30000) {
      grossSalaryMinusNSSF = grossSalary - 3000;
    } else if (grossSalary > 20000) {
      grossSalaryMinusNSSF = grossSalary - 2000;
    } else if (grossSalary > 10000) {
      grossSalaryMinusNSSF = grossSalary - 1000;
    }

    console.log("Your salary minus NSSF is: ", grossSalaryMinusNSSF);

    function calculateSalaryMinusNHIF() {
      let salaryMinusNHIF;
      if (grossSalaryMinusNSSF > 40000) {
        salaryMinusNHIF = grossSalaryMinusNSSF - 15000;
      } else if (grossSalaryMinusNSSF > 30000) {
        salaryMinusNHIF = grossSalaryMinusNSSF - 3000;
      } else if (grossSalaryMinusNSSF > 20000) {
        salaryMinusNHIF = grossSalaryMinusNSSF - 2000;
      } else if (grossSalaryMinusNSSF > 10000) {
        salaryMinusNHIF = grossSalary - 1000;
      }
      console.log(salaryMinusNHIF);

      function calculateTax() {
        let salaryMinusTax;

        if (salaryMinusNHIF > 40000) {
          salaryMinusTax = salaryMinusNHIF - 15000;
        } else if (salaryMinusNHIF > 30000) {
          salaryMinusTax = salaryMinusNHIF - 3000;
        } else if (salaryMinusNHIF > 20000) {
          salaryMinusTax = salaryMinusNHIF - 2000;
        } else if (salaryMinusNHIF > 10000) {
          salaryMinusTax = salaryMinusNHIF - 1000;
        }
        console.log(
          "From the nested callbacks function, your net salary is: ",
          salaryMinusTax
        );
        return salaryMinusTax;
      }
      calculateTax();
    }
    calculateSalaryMinusNHIF();
  }
  calculateGrossSalaryMinusNSSF();
}

calculateGrossSalary(74000, 1000);
