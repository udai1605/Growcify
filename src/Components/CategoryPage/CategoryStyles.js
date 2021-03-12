import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
    root: {
        maxWidth: 345,
    },
    card: {
        display: 'inline-block',
        flexDirection: 'column',
        margin: '20px'
    },
    link:{
        textDecoration:'none',
        color:'#715489',
       
    }
}));

export default useStyles