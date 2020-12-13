import React from 'react';
import { Typography, Box } from "@material-ui/core";
import { format, fromUnixTime } from "date-fns";

export const HighlightHeader = ({ highlights }) => {
    const date = format(fromUnixTime(highlights.dt), "d MMM");

    return (
        <Box display="flex" pl={1}>
            <Typography component="div">
                <Box fontWeight="fontWeightBold">
                    Highlights, {date}
                </Box>
            </Typography>
        </Box>
    )
};