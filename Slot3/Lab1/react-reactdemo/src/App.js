import EmployeeDetail from "./EmployeeDetail";
import EmployeeList from "./EmployeeList";
import EmployeeTable from "./EmployeeTable";
import AverageAge from "./AverageAge";
import EmployeeDropdown from "./EmployeeDropdown";
import ITEmployees from "./ITEmployees";
import SortedEmployees from "./SortedEmployees";
import GroupedEmployees from "./GroupedEmployees";
import IsAnyTeenager from "./IsAnyTeenager";
import SearchEmployee from "./SearchEmployee";


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
