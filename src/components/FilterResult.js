import 'date-fns';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import SubHeaderText from './presentationals/SubHeaderText';
import ValueUnit from './containers/ValueUnit';

export default function MaterialUIPickers() {
  
  const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <AppBar position="static" color="secondary">
    <Container>
      <Toolbar>
        <Grid container>
          <Grid item xs={6} sm={4} md={4}>
            <SubHeaderText />
          </Grid>
          <Grid item xs={6} sm={2} md={2}>
            <ValueUnit />
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around" spacing={2}>
                    <Grid item xs={6}>
                        <KeyboardDatePicker
                        disableToolbar
                        clearable
                        format="dd-MMM-yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="From"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <KeyboardDatePicker
                        disableToolbar
                        clearable
                        format="dd-MMM-yyyy"
                        margin="normal"
                        id="date-picker-inline1"
                        label="To"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" color="default" style={{top: '30%'}}>
            Set
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </Container>
  </AppBar>
    
  );
}