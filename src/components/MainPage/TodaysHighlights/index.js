import React from 'react'; 
import { Box } from "@material-ui/core";

import {HighlightsCard} from '../HighlightsCard';

export const TodaysHighlights = ({ highlights }) => {    
    return (
        <HighlightsCard 
            highlights={highlights}
        />
    );
}


