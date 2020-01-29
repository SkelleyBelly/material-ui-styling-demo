import React from 'react';
import Button from '@material-ui/core/Button';


export default ({children, ...props}) => <Button {...props}>{children}</Button>