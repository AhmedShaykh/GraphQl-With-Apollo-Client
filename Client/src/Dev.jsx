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

    const { developers } = data;

    return (
        <div>
            <h2>Developers List :</h2>
            <table>
                <h3>
                    {
                        developers.map(dev => {
                            return(<tr>
                                <td>{dev.name}</td>
                            </tr>)
                        })
                    }
                </h3>
            </table>
        </div>
    );
}

export default Dev;