import {Button, Container, Row} from "react-bootstrap";

export function Section(props) {
    const {title, children,button} = props;
    return (
        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <Button style={{margin:" 5px"}} variant={"primary"} onClick={()=>alert(button)}>Click</Button>
            <h2 className="text-center">{title}</h2>
            <Container>
                <Row>
                    {children}
                </Row>
            </Container>
        </div>
    );
}