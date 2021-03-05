import PhoneIcon from './PhoneIcon'
import EmailIcon from './EmailIcon'

function Body({ employees, search }) {
  console.log(employees);

  return (
    <div>
      <ul className="list-unstyled">
        {employees
          .filter(
            (employee) =>
              employee.name.first.toUpperCase().includes(search.toUpperCase()) ||
              employee.name.last.toUpperCase().includes(search.toUpperCase())
          )
          .map((employee, index) => (
            <li className="media mt-1" key={employee.cell}>
              <img src={employee.picture.large} className="mr-3" alt=""/>
              <div className="media-body">
                <h5 className="card-title">
                  {employee.name.first} {employee.name.last}
                </h5>
                <a href={`mailto:${employee.email}`} className="mt-0 mb-1">
                    <EmailIcon />
                    {employee.email}
                </a>
                <br />
                <a href={`tel:${employee.cell}`} className="mt-0 mb-1">
                    <PhoneIcon />
                    {employee.cell}
                </a>
                <p>
                  {employee.location.city}, {employee.location.state}{" "}
                  {employee.location.country}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Body;
