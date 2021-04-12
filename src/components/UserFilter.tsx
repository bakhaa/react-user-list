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
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

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
          id="query"
          label="Введите имя"
          variant="outlined"
          value={filter.search}
          onChange={(event) => onChange(event.target.value as string, "search")}
          onKeyDown={(event) => {
            if (event.code === "Escape" || event.keyCode === 27) {
              onChange("", "search");
            }
          }}
          InputProps={{
            endAdornment: (
              <>
                {isReadyUsers && filter.search !== "" && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="clear search"
                      onClick={() => onChange("", "search")}
                    >
                      <CloseIcon />
                    </IconButton>
                  </InputAdornment>
                )}
              </>
            ),
          }}
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
