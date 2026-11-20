import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    TextField,
} from '@mui/material';

export default function ContactForm() {
    const { t } = useTranslation('contact');
    const { control, handleSubmit, reset } = useForm({
        defaultValues: { name: '', email: '', message: '', privacy: false },
    });

    function onSubmit(data) {
        // TODO: envío real del correo, pendiente de hablar con el profesor
        console.log(data);
        reset();
    }

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
            <Controller
                name="name"
                control={control}
                rules={{ required: t('error.required') }}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        label={t('form.name')}
                        autoComplete="name"
                        fullWidth
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                    />
                )}
            />

            <Controller
                name="email"
                control={control}
                rules={{
                    required: t('error.required'),
                    pattern: { value: /^\S+@\S+\.\S+$/, message: t('error.email') },
                }}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        type="email"
                        label={t('form.email')}
                        autoComplete="email"
                        fullWidth
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                    />
                )}
            />

            <Controller
                name="message"
                control={control}
                rules={{
                    required: t('error.required'),
                    minLength: { value: 10, message: t('error.messageMin', { count: 10 }) },
                }}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        label={t('form.message')}
                        multiline
                        rows={5}
                        fullWidth
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                    />
                )}
            />

            <Controller
                name="privacy"
                control={control}
                rules={{ required: t('error.privacy') }}
                render={({ field, fieldState }) => (
                    <FormControl error={!!fieldState.error}>
                        <FormControlLabel
                            control={<Checkbox checked={field.value} onChange={field.onChange} />}
                            label={t('form.privacy')}
                        />
                        {fieldState.error && (
                            <FormHelperText>{fieldState.error.message}</FormHelperText>
                        )}
                    </FormControl>
                )}
            />

            <Button type="submit" variant="contained" sx={{ alignSelf: 'flex-start' }}>
                {t('form.submit')}
            </Button>
        </Box>
    );
}