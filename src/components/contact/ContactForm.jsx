import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import {
    Alert,
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
    const [status, setStatus] = useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: { name: '', email: '', message: '', privacy: false },
    });

    async function onSubmit(data) {
        setStatus(null);
        try {
            const response = await fetch('https://formsubmit.co/ajax/aantolincesena@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    _subject: 'Nuevo mensaje desde Bodegas Iluro',
                }),
            });
            const result = await response.json();

            if (response.ok && String(result.success) === 'true') {
                setStatus('success');
                reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
            <TextField
                {...register('name', { required: t('error.required') })}
                label={t('form.name')}
                autoComplete="name"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
            />

            <TextField
                {...register('email', {
                    required: t('error.required'),
                    pattern: { value: /^\S+@\S+\.\S+$/, message: t('error.email') },
                })}
                type="email"
                label={t('form.email')}
                autoComplete="email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
            />

            <TextField
                {...register('message', {
                    required: t('error.required'),
                    minLength: { value: 10, message: t('error.messageMin', { count: 10 }) },
                })}
                label={t('form.message')}
                multiline
                rows={5}
                fullWidth
                error={!!errors.message}
                helperText={errors.message?.message}
            />

            <FormControl error={!!errors.privacy}>
                <FormControlLabel
                    control={<Checkbox {...register('privacy', { required: t('error.privacy') })} />}
                    label={t('form.privacy')}
                />
                {errors.privacy && <FormHelperText>{errors.privacy.message}</FormHelperText>}
            </FormControl>

            {status === 'success' && <Alert severity="success">{t('form.sent')}</Alert>}
            {status === 'error' && <Alert severity="error">{t('form.failed')}</Alert>}

            <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ alignSelf: 'flex-start' }}
            >
                {isSubmitting ? t('form.sending') : t('form.submit')}
            </Button>
        </Box>
    );
}