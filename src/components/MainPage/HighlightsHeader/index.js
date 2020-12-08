import React from 'react';
import { Typography, Box } from "@material-ui/core";
import { format, fromUnixTime } from "date-fns";

export const HighlightsHeader = ({ highlights }) => {
    const date = format(fromUnixTime(highlights.dt), "d MMM");

    return (
        <Box display = "flex" flexDirection = "row" ml={5}>
            <Typography component="div">
                <Box fontWeight="fontWeightBold">
                    Highlights, {date}
                </Box>
            </Typography>
        </Box>
    )
};