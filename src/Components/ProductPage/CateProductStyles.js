import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    progress:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
    root:{
        maxWidth: 345,
    },
    card:{
    display:'inline-block',
    margin:'20px'
    },
    Alert:{
        width:'60% !important',
        margin:'10% auto'
    },
    explore:{
        width:'60%',
        margin:'auto'
    }
}));


export default useStyles