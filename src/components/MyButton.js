import {Button} from "react-bootstrap";

export function MyButton(props) {
    const {onClick, children} = props;
    return (
       <Button variant='primary' onClick={onClick} size='sm' className='ms- mt-1' style={{maxWidth:'10%', marginLeft:"20px"}}>{children}</Button>
    );
}