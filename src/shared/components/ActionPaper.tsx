import React from "react";
import {
  Paper,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";

import withStyles, { WithStyles } from "@mui/styles/withStyles";

const styles = (theme: any) => ({
  helpPadding: {
    "@media (max-width:  400px)": {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  fullWidth: {
    width: "100%",
  },
});

interface ActionPaperProps extends WithStyles<typeof styles> {
  theme: any;
  title?: React.ReactNode;
  content?: React.ReactNode;
  maxWidth: number;
  actions?: React.ReactNode;
  helpPadding?: boolean;
  fullWidthActions?: boolean;
}

const ActionPaper: React.FC<ActionPaperProps> = ({
  theme,
  classes,
  title,
  content,
  maxWidth,
  actions,
  helpPadding,
  fullWidthActions,
}) => {
  return (
    <Box pt={1}>
      <Paper style={{ maxWidth: theme.breakpoints.values[maxWidth] }}>
        {title && <DialogTitle>{title}</DialogTitle>}
        {content && (
          <DialogContent
            classes={helpPadding ? { root: classes.helpPadding } : undefined}
          >
            {content}
          </DialogContent>
        )}
        {actions && (
          <Box pb={2} pr={2}>
            <DialogActions
              classes={{
                root: fullWidthActions ? classes.fullWidth : undefined,
              }}
            >
              {actions}
            </DialogActions>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default withStyles(styles, { withTheme: true })(ActionPaper);
