interface Employee{
  name: string;
  role: string;
  isFullTime?: boolean;
}

export default function UserCard(props: Employee) {

  const { name, role, isFullTime } = props;

  //Fallback
  const employmentStatus = isFullTime ?? false;

  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Status: {employmentStatus ? "Full Time" : "Part Time"}</p>
    </div>
  )

  //Test code that I did in page.tsx
    // <h1>Employee List:</h1>
    // <UserCard name = "Prince Nesher Magno" role = "Manager" isFullTime = {true}/>

    // {/* Testing out the fallback value here */}
    // <UserCard name = "Jonathan Marl Echeche" role = "Developer"/>
}