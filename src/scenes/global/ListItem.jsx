import { useTheme } from '@emotion/react';
import { MenuItem} from 'react-pro-sidebar';
import { tokens } from '../../theme';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export const ListItem = ({title, to , icon, selected, setSelected}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active ={selected === title}
      onClick={()=>setSelected(title)}
      icon={icon}
      style={{color : colors.grey[100]}}
      component={<Link to={to} />}
      >
        <Typography>
          {title}
        </Typography>
    
    </MenuItem>
  )
}

