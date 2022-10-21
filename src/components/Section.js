import {Button, Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {useState} from "react";

function OpenCloseButton(props) {
    const {isOpen, onChangeIsOpen} = props;

    return <Button
        variant="outline-primary" size="sm"
        className="ms-4"
        onClick={() => onChangeIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
    </Button>;
}

function SectionContent(props) {
    const {isOpen, children} = props;
    if (!isOpen) return;
    return (
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    );
}

export function Section(props) {
    const {title, children, isInitiallyOpen} = props;
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);
    return (
        <div className="my-3 p-1 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title}
                <OpenCloseButton
                    isOpen={isOpen}
                    onChangeIsOpen={() => setIsOpen(!isOpen)}/>
            </h2>
            <SectionContent isOpen={isOpen}>{children}</SectionContent>
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

// export function Section(props) {
//     const {initial} = (props)
//     const [isOpen, setIsOpen] = useState((initial === 1)?true:false)
//     const {title, children} = props;
//     return (<>
//         <div  style={{backgroundColor: "#e6e6fa", marginBottom:"20px"}}>
//             <h3 style={{textAlign: "center", fontWeight: "bold"}}>
//                 {title}
//                 <Button variant={"primary"} style={{margin: "5px"}} onClick={() => setIsOpen(!isOpen)}>{(isOpen)?"sluit":"open"}</Button>
//             </h3>
//             <Container>
//                 <Row>
//                     {(isOpen)?children:""}
//                 </Row>
//             </Container>
//         </div>
//
//     </>)
// }