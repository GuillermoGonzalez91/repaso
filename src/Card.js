import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {

      minWidth: 275,
      backgroundColor: '#2196f3',
      color: 'white',
      borderRadius: '10px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
    title: {
      alingn: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    content: {
      fontSize: 18,
    },
  });
  


  function Tarjeta(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {props.title}
          </Typography>
          <Typography className={classes.content}>
            {props.content}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  

  export default Tarjeta;