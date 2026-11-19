import { Button, TextField} from "@mui/material"
import { Controller, useForm } from "react-hook-form";
import MuiTextField from "./MuiTextField";
import MuiCheckBox from "./MuiCheckBox";

export default function MuiForm () {
    const { handleSubmit, control, formState: {errors}, reset } = useForm({
        defaultValues: {
            fieldName: 'Esteve',
            surname: ''
        }
    });

    function onSubmit (value) {
        // Enviamos el formulario a nuestro backend
        console.log(value);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="fieldName"
                control={control}
                rules={{ required: 'Este campo es obligatorio' }}
                render={({ field }) =>
                    <TextField
                        {...field}
                        label="Nombre"
                        value={field.value}
                        variant="outlined"
                        size="small"
                        error={!!errors.fieldName}
                        helperText={errors?.fieldName?.message.toString()}
                    />
                }
            />
            <MuiTextField
                name="surname"
                label="Apellido"
                control={control}
                rules={{ required: 'El apellido es obligatorio' }}
                errors={errors}
            />
            <MuiCheckBox 
                name="cookie"
                label="Cookies"
                control={control}
                rules={{ required: 'Las cookies se debe acceptar' }}
                errors={errors}
            />
            <Button variant="contained" type="submit" sx={{ marginLeft: '4px' }}>Enviar</Button>
        </form>
    );
} 