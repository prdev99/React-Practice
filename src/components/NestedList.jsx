import { Table } from "react-bootstrap";

function NestedList() {
  const data = [
    {
      name: "Shyam",
      phone: 4484949449,
      address: [
        {
          city: "Jaipur",
          state: "RJ",
          country: "India",
        },
      ],
    },
    {
      name: "Anil",
      phone: 8585858484,
      address: [
        {
          city: "Indore",
          state: "MP",
          country: "India",
        },
      ],
    },
    {
      name: "Vinod",
      phone: 848588584,
      address: [
        {
          city: "Raipur",
          state: "CG",
          country: "India",
        },
      ],
    },
  ];
  return (
    <>
      <h1>Nested List</h1>
      <Table>
        <tbody>
          <tr>
            <th>S.NO.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>
                <Table>
                  <tbody>
                    {item.address.map((value, i) => (
                      <tr key={i}>
                        <td>{value.city}</td>
                        <td>{value.state}</td>
                        <td>{value.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default NestedList;
