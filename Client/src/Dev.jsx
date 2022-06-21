import React from "react";
import { useQuery, gql } from "@apollo/client";

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

function Dev() {
    const { loading, error, data } = useQuery(GET_API);

    if (loading) return <h3>Loading...</h3>;
    if (error) return <h3>Error :(</h3>;

    const { Developers } = data;

    return (
        <div className="App">
            <h2>Developers List ;</h2>
            <table border={4} width="500">
                <thead>
                    <tr>
                        <th>Name :</th>
                        <th>Age :</th>
                        <th>Email :</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Developers.map(dev => {
                            return (<tr key={dev.id}>
                                <td>{dev.name}</td>
                                <td>{dev.age}</td>
                                <td>{dev.email}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

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