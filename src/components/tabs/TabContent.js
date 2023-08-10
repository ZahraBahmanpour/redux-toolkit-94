import { Button, Form } from "react-bootstrap";

function TabContent(post) {
  const { id, body, tempBody } = post;
  return (
    <>
      <Form.Control as="textarea" value={body} style={{ height: 200 }} />
      <Button className={"m-3"}>Save</Button>
    </>
  );
}

export default TabContent;
