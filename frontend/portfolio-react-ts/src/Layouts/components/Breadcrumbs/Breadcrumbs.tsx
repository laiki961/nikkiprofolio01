import { Breadcrumb } from "react-bootstrap";

export function Breadcrumbs(props: any) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
      <Breadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
        Dummy
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{props.product.name}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
