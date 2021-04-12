import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { IFilter } from "../store/ducks/users.duck";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const UserFilter: React.FC<{
  changeFilter: any;
  filter: IFilter;
  isReadyUsers?: boolean;
}> = ({ changeFilter, filter, isReadyUsers = false }) => {
  const classes = useStyles();

  const onChange = (value: string | boolean, filterType: any) => {
    return changeFilter({ ...filter, [filterType]: value });
  };

  return (
    <FormGroup row>
      <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          disabled={!isReadyUsers}
          id="outlined-basic"
          label="Введите имя"
          variant="outlined"
          value={filter.search}
          onChange={(event) => onChange(event.target.value as string, "search")}
        />
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="sort-select-label">
          Сортировать по дате создания
        </InputLabel>
        <Select
          disabled={!isReadyUsers}
          labelId="sort-select-label"
          id="sort-select"
          value={filter.sort}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
            onChange(event.target.value as string, "sort")
          }
          label="Сортировать по дате создания"
        >
          <MenuItem value="0">Без сортировки</MenuItem>
          <MenuItem value="ASC">По возрастанию</MenuItem>
          <MenuItem value="DESC">По убыванию</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            disabled={!isReadyUsers}
            checked={filter.onlyActive}
            onChange={(e) => onChange(e.target.checked, "onlyActive")}
            name="onlyActive"
            color="primary"
          />
        }
        label="Показать только активных пользователей"
      />
    </FormGroup>
  );
};

export default UserFilter;
