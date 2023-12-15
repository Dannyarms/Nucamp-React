import { Col } from "reactstrap";

const Loading = () => {
    return (
        <Col>
            <i className="fa fa-spinner fa-pulse fal-3x fa-fw text-primary" />
            <p>Loading...</p>
        </Col>
    )
};

export default Loading;