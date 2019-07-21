import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function LinearBuffer(props) {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);
  const [buffer, setBuffer] = React.useState(0);

  const progress = React.useRef(() => {});
  React.useEffect(() => {
    progress.current = () => {
      if (props.flag === 2) {
        setCompleted(0);
        setBuffer(10);
      }
      else if(props.flag === 0){
        setCompleted(0);
        setBuffer(0);
      }
       else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 20;
        setCompleted(completed + diff);
        setBuffer(completed + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    function tick() {
      progress.current();
    }

        const timer = setInterval(tick, 700);
        return () => {
          clearInterval(timer);
        };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} />
      {/* <br />
      <LinearProgress color="secondary" variant="buffer" value={completed} valueBuffer={buffer} /> */}
    </div>
  );
}
