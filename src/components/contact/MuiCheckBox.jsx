import { Controller } from "react-hook-form";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from "@mui/material"


export default function MuiCheckBox({ name, control, rules = {}, label, errors }) {
    console.log(errors);

    return (
        <FormControl error={!!errors[name]}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Controller
                            name={name}
                            control={control}
                            rules={rules}
                            render={({ field }) =>
                                <>
                                    <Checkbox
                                        {...field}
                                        value={field.value}
                                    />
                                    <FormLabel>{label}</FormLabel>
                                </>

                            }
                        />
                    }
                />
            </FormGroup>
            {errors[name] && <FormHelperText>{errors?.[name]?.message.toString()}</FormHelperText>}
        </FormControl>
    )
}