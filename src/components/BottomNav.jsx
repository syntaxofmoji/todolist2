import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import { CalendarMonth, Today } from "@mui/icons-material";

export default function BottomNav() {
  const [value, setValue] = React.useState("");
  // const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: "100%" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Incoming"
        value="todo"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction 
      label="Today" 
      value="today" 
      icon={<Today />} 
      />
      <BottomNavigationAction
        label="Calendar"
        value="calendar"
        icon={<CalendarMonth />}
      />
    </BottomNavigation>
  );
}

//Created: Wednesday, 29 March BE 2566 22:07
//Modified: Wednesday, 29 March BE 2566 22:31
