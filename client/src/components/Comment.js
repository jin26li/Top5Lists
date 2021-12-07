import { ListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Comment(props) {
    const { comment } = props;

    return (
        <ListItem sx={{paddingTop: 0}}>
            <Box sx={ {border: 1, borderRadius: 2, p: 2, bgcolor:'#F6CAF8',} } width='100%'>
                <Typography color="text.secondary" sx={{marginRight:1}}>
                    { comment[0] }
                </Typography>
                <Typography>
                    { comment[1] }
                </Typography>
            </Box>
        </ListItem>
    )
}