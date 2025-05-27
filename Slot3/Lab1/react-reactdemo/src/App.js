import EmployeeDetail from "./EmployeeDetail";
import EmployeeList from "./EmployeeList";
import EmployeeTable from "./EmployeeTable";
import AverageAge from "./AverageAge";
import EmployeeDropdown from "./EmployeeDropdown";
import ITEmployees from "./ITEmployees";
import SearchEmployee from "./SearchEmployee";
import GroupedEmployees from "./GroupedEmployees";
import IsAnyTeenager from "./IsAnyTeenager";
import SortedEmployees from "./SortedEmployees";


function App() {
  return (
    <div>
      <EmployeeDetail />
      <EmployeeList />
      <EmployeeTable />
      <AverageAge />
      <EmployeeDropdown />
      <ITEmployees />
      <SortedEmployees />
      <GroupedEmployees />
      <IsAnyTeenager />
      <SearchEmployee />
    </div>
  );
}

export default App;
