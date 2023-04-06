import { Card, CardContent, Typography } from '@material-ui/core';

const CustomCard = ({ data1, data2, data3 }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{data1}</Typography>
        <Typography variant="body1">{data2}</Typography>
        <Typography variant="body2">{data3}</Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
