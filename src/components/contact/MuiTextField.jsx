import { Controller } from "react-hook-form";
import { TextField} from "@mui/material"


export default function MuiTextField ({name, control, rules = {}, label, errors}) {
    return (
        <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) =>
                    <TextField
                        {...field}
                        label={label}
                        value={field.value}
                        variant="outlined"
                        size="small"
                        error={!!errors[name]}
                        helperText={errors?.[name]?.message.toString()}
                    />
                }
            />
    )
}