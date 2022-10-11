import {Button, Container, Row} from "react-bootstrap";
import {useState} from "react";
import {MyButton} from "./MyButton";

export function Section(props) {
    const {title, children,initial} = props;
    const [isOpen,setIsOpen] =useState(initial? true:false);
    return (

        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            {/*<Button style={{margin:" 5px"}} variant={"primary"} onClick={()=>alert(button)}>Click</Button>*/}
            <h2 className="text-center">{title}</h2>

            <div>
                <MyButton onClick={()=>{setIsOpen(!isOpen)}}>{isOpen? '-':'+'}</MyButton>
                <Container>
                    <Row>
                        {(isOpen)?children:""}
                    </Row>
                </Container>

            </div>
        </div>
    );
}