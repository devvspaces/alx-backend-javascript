export default function createIteratorObject(report) {
  let idx = 0;
  let empIdx = 0;
  let keys = Object.keys(report.allEmployees);
  let iterCount = 0;
  return {
    next() {
      if (idx < keys.length) {
        let currentDepartment = report.allEmployees[keys[idx]];
        if (empIdx < currentDepartment.length) {
          iterCount++;
          return {value: currentDepartment[empIdx], done: false}
        }
      }
      return {
        value: iterCount,
        done: false,
      }
    }
  }
}
