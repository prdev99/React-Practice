function Student(props) {
  console.log(props);
  const {
    name,
    email,
    other: { address, city },
  } = props;
  return (
    <>
      <h1>Student Name is {name}</h1>
      <h1>Student email is {email}</h1>
      <h1>Student address is {address}</h1>
      <h1>Student City is {city}</h1>
    </>
  );
}

export default Student;
