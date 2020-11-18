import React from 'react'; 
import { Box } from "@material-ui/core";

import {HighlightsCard} from '../HighlightsCard';

export const TodaysHighlights = ({ highlights }) => {    
    return (
        <Box display = "flex" flexDirection = "row" justifyContent="space-evenly" p={3}>
            <HighlightsCard 
                highlights={highlights}
            />
        </Box>
    );
}


