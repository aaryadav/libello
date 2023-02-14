import { styled } from '../../stitches.config';

import { Box } from './box';
import IconBox from './iconbox';


const StyledSidebar = styled(Box, {
    display: 'flex',
    marginTop: '80px',
    position: 'fixed',
    flexDirection: 'column',
    width: '250px',
    height: '100vh',
    overflow: 'auto',
    overscrollBehavior: 'contain',
    zIndex: '-1',
    variants: {
        theme: {
            corp: {
                borderRight: '1px solid #37373D',
            },
            chill: {
                padding: '15px',
            },
        },
    },
    defaultVariants: {
        theme: 'corp',
    }
});

const NavItem = styled(Box, {
    variants: {
        theme: {
            corp: {
                padding: '10px',
                paddingLeft: '40px',
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '$slate5',
                }
            },
            chill: {
                padding: '15px',
                paddingLeft: '25px',
                borderRadius: '10px',
                marginBottom: '5px',
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '$violet5',
                }
            },
        },
    },
    defaultVariants: {
        theme: 'corp',
    }
})

const Sidebar = ({ items, theme }) => {
    return (
        <StyledSidebar theme={theme}>
            <Box css={{ padding: '10px', alignItems: 'center'}}>
                <svg width="20px" height="20px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                <p style={{ paddingLeft:'15px' }}> <b>Files</b> </p>
            </Box>
            {items.map((item) => (
                <NavItem theme={theme} key={item.id}>
                    {item.title}
                </NavItem>
            ))}
        </StyledSidebar>
    );
}


export default Sidebar;