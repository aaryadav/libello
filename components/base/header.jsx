import { styled } from '../../stitches.config';
import { Box } from './box';

const StyledHeader = styled(Box, {
    position: 'fixed',
    display: 'flex',
    backgroundColor: '#1e1e1e',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '80px',
    zIndex: '1',
    variants: {
        theme: {
            corp: {
                // padding: '0px 40px',
            },
            chill: {

            },
        },
    },
    defaultVariants: {
        theme: 'corp',
    }
});

const HeaderItem = styled(Box, {
    variants: {
        theme: {
            corp: {
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                '&:hover': {
                    cursor: 'pointer',
                    // backgroundColor: '$slate5',
                }
            },
            chill: {
                padding: '15px',
                borderRadius: '10px',
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

const Header = ({ children, items, theme }) => {
    return (
        <StyledHeader theme={theme}>
            {items.map((item) => (
                <HeaderItem theme={theme} key={item.id}>
                    {item.title}
                </HeaderItem>
            ))}
            {children}
        </StyledHeader>
    );
}


export default Header;