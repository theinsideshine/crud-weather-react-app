import Alert from '@mui/material/Alert';

export const ErrorForm =( msgError ) => {
    return (
        
       msgError && (
            <Alert variant="outlined" severity="error">            
            <strong> { msgError }</strong>
            </Alert>
        )
      )
} 