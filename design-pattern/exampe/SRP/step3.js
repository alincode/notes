class Employee {
  constructor(employeeData) {
    this.employeeData = employeeData;
  }
  calculatePay() { }
  reportHours() { return new HourReporter().reportHours() };
  save() { return new EmployeeServer().saveEmployee() };
}

class HourReporter {
  reportHours() { }
}

class EmployeeServer {
  saveEmployee() { }
}