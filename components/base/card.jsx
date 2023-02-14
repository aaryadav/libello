import { styled } from '../../stitches.config';
import { Box } from './box';

const SCard = styled(Box, {
    display: 'block',
    width: '205px',
    height: '205px',
    padding: '25px',
    borderRadius: '15px',
    zIndex: '-1',
    // transition: 'all .3s ease-in-out',
    
    '&:hover': {
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #EBEBFA 0%, #FAF6FD 50%, #FCF8FA 100%)',
        // transform: 'scale(1.05)',
    },
    
    
});

const Card = ({ children }) => {
    return (
        <SCard>
            <Box css={{ display: 'block' }}>hey</Box>
        </SCard>
    )
}

export { Card };