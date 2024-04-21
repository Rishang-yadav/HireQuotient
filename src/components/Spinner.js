import React from 'react'
import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'

const Spinner = () => {
    return (
        <div className='flex flex-col items-center space-y-2'>
            <Stack spacing={2} direction="row">
                <LoadingButton variant='ontlined'> loading..</LoadingButton>
                <LoadingButton loading variant='outlined'>
                   
                </LoadingButton>
            </Stack>
        </div>
    )
}

export default Spinner;




