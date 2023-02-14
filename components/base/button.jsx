import { styled } from '../../stitches.config';
import { Box } from './box';

const Button = styled('button', {
    backgroundColor: '#383838',
    border: '1px solid $slate10',
    color: 'white',
    padding: '10px 20px',
    width: 'fit-content',
    fontSize: '$s',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '$slate11',
        color: 'white',
    },
});

export default Button;
