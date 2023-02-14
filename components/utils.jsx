import React, { useState } from 'react';
import { styled } from "../stitches.config";
import { Box, IconBox } from "./base/box";
import Button from "./base/button";
const RunButton = styled(Box, {});

export const DividerButtons = ({ handleAdd, index }) => {
    const [vis, setVis] = useState(false);

    return (
        <Box css={{ justifyContent: 'center', width: "98%", height: "65px" }}
            onMouseEnter={() => {
                setVis(true)
            }}
            onMouseLeave={() => {
                setVis(false)
            }}>
            <Box css={{ margin: '10px', flexDirection: "row", width: "", justifyContent: "space-evenly" }}>
                {vis && (
                    <>
                        <IconBox onClick={() => handleAdd(index, 'code')}>+ Code</IconBox>
                        <IconBox onClick={() => handleAdd(index, 'markdown')}>+ Markdown</IconBox>
                    </>
                )}
            </Box>
        </Box>
    )
}
