export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const key of Object.keys(report.allEmployees)) {
        const employees = report.allEmployees[key];
        for (const emp of employees) {
          yield emp;
        }
      }
    },
  };
}
