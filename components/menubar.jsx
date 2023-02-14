import React, { useState } from 'react';
import * as Menubar from '@radix-ui/react-menubar';
// import { styled } from '@stitches/react';
import { blackA, violet, mauve } from '@radix-ui/colors';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
import { styled } from '../stitches.config';

const FILE_ITEMS = ['New Notebook', 'Open Notebook', 'Upload Notebook'];
const EDIT_ITEMS = ['Undo', 'Redo', 'Select all cells', 'Cut cell or selection', 'Copy cell or selection', 'Paste', 'Delete Selected Cells', 'Find and Replace', 'Find next', 'Find previous', 'Notebook Settings', 'Clear all outputs'];
const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const CHECK_ITEMS0 = ['Table of contents', 'Notebook info', 'Executed code history', 'Comments sidebar'];
const CHECK_ITEMS2 = ['Collapse Sections', 'Expand Sections'];
const CHECK_ITEMS3 = ['Show/hide Code', 'Show/hide output'];
const CHECK_ITEMS4 = ['Focus next tab', 'Focus previous tab', 'Move tab to next pane', 'Move tab to previous pane'];


const Menu = () => {
    const [checkedSelection, setCheckedSelection] = useState([CHECK_ITEMS0[1]]);
    const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[2]);
    return (
        <MenubarRoot>
            <Menubar.Menu>
                <MenubarTrigger>File</MenubarTrigger>
                <Menubar.Portal>
                    <MenubarContent align="start" sideOffset={5} alignOffset={-3}>
                        {FILE_ITEMS.map((item) => (
                            <MenubarItem key={item}>{item}</MenubarItem>
                        ))}
                        <MenubarSeparator />
                        <MenubarItem>Save</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Download</MenubarItem>
                    </MenubarContent>
                </Menubar.Portal>
            </Menubar.Menu>

            <Menubar.Menu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <Menubar.Portal>
                    <MenubarContent align="start" sideOffset={5} alignOffset={-3}>
                        {EDIT_ITEMS.map((item) => (
                            <MenubarItem key={item}>{item}</MenubarItem>
                        ))}
                    </MenubarContent>
                </Menubar.Portal>
            </Menubar.Menu>

            <Menubar.Menu>
                <MenubarTrigger>View</MenubarTrigger>
                <Menubar.Portal>
                    <MenubarContent align="start" sideOffset={5} alignOffset={-14}>
                        {CHECK_ITEMS0.map((item) => (
                            <MenubarCheckboxItem
                                key={item}
                                checked={checkedSelection.includes(item)}
                                variant="inset"
                                onCheckedChange={() =>
                                    setCheckedSelection((current) =>
                                        current.includes(item)
                                            ? current.filter((el) => el !== item)
                                            : current.concat(item)
                                    )
                                }
                            >
                                <MenubarItemIndicator>
                                    <CheckIcon />
                                </MenubarItemIndicator>
                                {item}
                            </MenubarCheckboxItem>
                        ))}

                        <MenubarSeparator />
                        {CHECK_ITEMS2.map((item) => (
                            <MenubarCheckboxItem
                                key={item}
                                variant="inset"
                            >
                                <MenubarItemIndicator>
                                    <CheckIcon />
                                </MenubarItemIndicator>
                                {item}
                            </MenubarCheckboxItem>
                        ))}
                        
                        <MenubarSeparator />
                        {CHECK_ITEMS3.map((item) => (
                            <MenubarCheckboxItem
                                key={item}
                                variant="inset"
                            >
                                <MenubarItemIndicator>
                                    <CheckIcon />
                                </MenubarItemIndicator>
                                {item}
                            </MenubarCheckboxItem>
                        ))}

                    </MenubarContent>
                </Menubar.Portal>
            </Menubar.Menu>
            <Menubar.Menu>
                <MenubarTrigger>Insert</MenubarTrigger>
            </Menubar.Menu>
            <Menubar.Menu>
                <MenubarTrigger>Runtime</MenubarTrigger>
            </Menubar.Menu>
            <Menubar.Menu>
                <MenubarTrigger>Tools</MenubarTrigger>
            </Menubar.Menu>
            <Menubar.Menu>
                <MenubarTrigger>Help</MenubarTrigger>
            </Menubar.Menu>

        </MenubarRoot>
    );
};

const MenubarRoot = styled(Menubar.Root, {
    display: 'flex',
    backgroundColor: '',
    // boxShadow: `0 5px 10px ${blackA.blackA7}`,
    borderBottom: '1px solid #37373D',
});

const MenubarTrigger = styled(Menubar.Trigger, {
    all: 'unset',
    marginBottom: '2px',
    fontFamily: '$sans',
    outline: 'none',
    userSelect: 'none',
    padding: '5px 10px',
    lineHeight: 1,
    color: '$slate1',
    backgroundColor: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,

    '&[data-highlighted], &[data-state="open"]': {
        backgroundColor: '$slate11',
    },
});

const contentStyles = {
    minWidth: 300,
    backgroundColor: '#383838',
    border: '1px solid #37373D',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    zIndex: 10,
    opacity: 1,
};

const MenubarContent = styled(Menubar.Content, contentStyles);
const MenubarSubContent = styled(Menubar.SubContent, contentStyles);

const itemStyles = {
    all: 'unset',
    fontFamily: '$sans',
    lineHeight: 1,
    color: '$slate1',
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '3px 22px',
    position: 'relative',
    userSelect: 'none',

    '&[data-disabled]': {
        color: '$slate6',
        pointerEvents: 'none',
    },

    '&[data-highlighted]': {
        backgroundColor: '$slate11',
    },

    variants: {
        variant: {
            inset: {
                paddingLeft: 20,
            },
        },
    },
};

const MenubarItem = styled(Menubar.Item, itemStyles);
const MenubarSubTrigger = styled(Menubar.SubTrigger, {
    '&[data-state="open"]': {
        backgroundColor: violet.violet4,
        color: violet.violet11,
    },
    ...itemStyles,
});

const MenubarCheckboxItem = styled(Menubar.CheckboxItem, itemStyles);
const MenubarRadioItem = styled(Menubar.RadioItem, itemStyles);

const MenubarItemIndicator = styled(Menubar.ItemIndicator, {
    position: 'absolute',
    left: 0,
    width: 20,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const RightSlot = styled('div', {
    marginLeft: 'auto',
    paddingLeft: 20,
    color: mauve.mauve9,
    '[data-highlighted] > &': { color: 'white' },
    '[data-disabled] &': { color: mauve.mauve8 },
});

const MenubarSeparator = styled(Menubar.Separator, {
    height: 1,
    backgroundColor: '$slate11',
    margin: 5,
});

export default Menu;