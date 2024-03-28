import { Table } from "react-bootstrap";
import ReUseList from "./ReUseList";

function List() {
  const data = [
    { name: "Anil", address: "Agra", contact: 8439483933 },
    { name: "Shyam", address: "Sagar", contact: 778838999 },
    { name: "Rohit", address: "Indore", contact: 483839949 },
  ];
  return (
    <>
      {/* <h1>Table List</h1>
      <Table border={2}>
        <tbody>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
          </tr>
          {data.map((value, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{value.name}</td>
              <td>{value.address}</td>
              <td>{value.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table> */}

      {
        data.map((item, i) =>
          <ReUseList item = {item} key = {i}/>
        )
      }
    </>
  );
}

export default List;
