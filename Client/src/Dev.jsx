import React from "react";
import { useQuery,
    gql,
    useMutation
} from "@apollo/client";

const GET_API = gql`
  query GetAllAPIs {
    Developers {
        name,
        age,
        email,
        id
      }
  }
`;

const ADD_API = gql`
  mutation AddDeveloper($id: Int!, $name: String!, $age: Int, $email: String) {
    addDeveloper( {
        id: $id,
        name: $name,
        age: $age,
        email: $email
    }) 
    {
      id,
      name,
      age,
      email
    }
  }
`;

function Dev() {
    const { loading, error, data } = useQuery(GET_API);

    // ============ POST METHOD ============ //
    const [updataDeveloper] = useMutation(ADD_API);

    if (loading) return <h3>Loading...</h3>;
    if (error) return <h3>Error :(</h3>;

    const { Developers } = data;

    return (
        <div className="App">
            <h2>Developers List ;</h2>
            <table border={4} width="500">
                <thead>
                    <tr>
                        <th height="50">Name :</th>
                        <th height="50">Age :</th>
                        <th height="50">Email :</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Developers.map(dev => {
                            return (<tr key={dev.id}>
                                <td height="70">{dev.name}</td>
                                <td height="70">{dev.age}</td>
                                <td height="70">{dev.email}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

            <button>Add Developers</button>

            {/* <ul>
                {Developers.map(dev => {
                    return (
                        <h3>
                            <li key={dev}>{dev.name}</li>
                        </h3>
                    )
                })}
            </ul> */}
        </div>
    );
}

export default Dev;