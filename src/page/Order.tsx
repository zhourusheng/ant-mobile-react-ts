import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export interface ItemProps {
  index: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 400,
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

function renderRow(props: ItemProps) {
  const { index} = props;
  return (
    <ListItem button key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {renderRow}
    </div>
  );
}