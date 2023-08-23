import React, { useState } from 'react';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { Checkbox, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface Department {
  id: number;
  name: string;
  subDepartments: SubDepartment[];
}

interface SubDepartment {
  id: number;
  name: string;
}

const departmentsData: Department[] = [
    {
      id: 1,
      name: 'Agriculture & Fishing',
      subDepartments: [
        { id: 101, name: 'Agriculture' },
        { id: 102, name: 'Crops' },
        { id: 103, name: 'Farming Animals & LiveStocks' },
        { id: 104, name: 'Fishery & Aquaculture' },
        { id: 105, name: 'Ranching' },
      ],
    },
    {
      id: 2,
      name: 'Business Services',
      subDepartments: [
        { id: 201, name: 'Accounting & Accounting Services' },
        { id: 202, name: 'Auction' },
        { id: 203, name: 'Business Services - General' },
        { id: 204, name: 'Call Centers & Business Centers' },
        { id: 204, name: 'Career Planning' },
        { id: 204, name: 'Career' },
        { id: 204, name: 'Commercial Printing' },
        { id: 204, name: 'Debt Collection' },
      ],
    },
  ];
  

const DepartmentList: React.FC = () => {
  const [expanded, setExpanded] = useState<number[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  const handleExpand = (departmentId: number) => {
    if (expanded.includes(departmentId)) {
      setExpanded(prev => prev.filter(id => id !== departmentId));
    } else {
      setExpanded(prev => [...prev, departmentId]);
    }
  };

  const handleSelect = (id: number) => {
    if (selected.includes(id)) {
      setSelected(prev => prev.filter(item => item !== id));
    } else {
      setSelected(prev => [...prev, id]);
    }
  };

  const isExpanded = (departmentId: number) => expanded.includes(departmentId);
  const isSelected = (id: number) => selected.includes(id);

  return (
    <List>
      {departmentsData.map(department => (
        <React.Fragment key={department.id}>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={isSelected(department.id) || department.subDepartments.every(subDept => isSelected(subDept.id))}
                onChange={() => handleSelect(department.id)}
              />
            </ListItemIcon>
            <ListItemText
              primary={department.name}
              onClick={() => handleExpand(department.id)}
            />
            {isExpanded(department.id) ? <ExpandMore /> : <ChevronRight />}
          </ListItem>
          <Collapse in={isExpanded(department.id)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map(subDept => (
                <ListItem key={subDept.id} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={isSelected(subDept.id)}
                      onChange={() => handleSelect(subDept.id)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDept.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentList;
