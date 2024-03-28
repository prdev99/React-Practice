import { Table } from "react-bootstrap";

function ReUseList(props) {
  return (
    <>
      <Table>
        <tbody>
          <tr>
            <td>{[props.item.name]}</td>
            <td>{[props.item.address]}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
export default ReUseList;
