import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: '15px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = () => {
  const classes = useStyles();

  const handleCall = () => {
    window.location.href = "tel:18752006620"
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          预约安装时间
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          安装订单位置详情
        </Typography>
        <Typography variant="body2" component="p">
          预约剩余5分钟
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleCall}
        >拨打电话</Button>
        <Link to="/detail">
          <Button
            size="small"
            variant="contained"
            color="primary"
          >详情页面</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default SimpleCard