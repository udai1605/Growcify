import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
    },
    welcome: {
        position: 'absolute',
        marginTop: '15%',
        marginLeft: '30%'
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white !important',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        textTransform: 'none !important',
        position:'absolute !important' ,
        marginTop:'23% !important',
        marginLeft:'40% !important'
    }
}));

export default useStyles