import { styled } from '../../stitches.config';
import { Box } from './box';

const StyledContent = styled(Box, {
    display: 'flex',
    margin: '80px 0px 80px 250px',
    padding: '0px',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    overflowX: 'hidden',
    zIndex: '0',
});

const Content = ({ children }) => {
    return (
        <StyledContent>
            {children}
        </StyledContent>
    );
}

export default Content;