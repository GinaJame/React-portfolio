import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    darkm: true,
    language: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(state)
  };

  return (
    <FormControl component="fieldset">
      <FormGroup >
        <FormControlLabel
          control={<Switch checked={state.darkm} onChange={handleChange} name="darkm" />}
          label="Dark Mode"
        />
        <FormControlLabel
          control={<Switch checked={state.language} onChange={handleChange} name="language" />}
          label="Language"
        />
      </FormGroup>
    </FormControl>
  );
}
