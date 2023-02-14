import { styled } from '../../stitches.config';

export const Box = styled('div', {
    display: 'flex',
    fontFamily: '$sans',
    fontSize: '$p',
});

export const IconBox = styled(Box, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '$sans',
    fontSize: '$p',
    cursor: 'pointer',
    padding: '8px',
    '&:hover': {
        backgroundColor: '#4a4a4a',
    },            
});