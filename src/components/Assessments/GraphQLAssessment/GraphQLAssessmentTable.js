import { useQuery  } from '@apollo/client';
import React, { useState } from 'react';
import GET_CAKES from '../../../actions/cakeActions';

import './style.scss';


export default function GraphQLAssessmentTable() {
    const [filter, setFilter] = useState('');

    const {loading, error, data } = useQuery(GET_CAKES);

    if (loading) return <p>loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    let cakesListFiltered;

    // works on any fields
    if (filter !== '') {
        cakesListFiltered = data.cakes
          .filter((o) => Object
            .keys(o).some((k) => String(o[k])
              .toLowerCase()
              .includes(filter.toLowerCase())));
    }

  const myCakeList = filter ? cakesListFiltered : data.cakes;

    const handleFilterChange = (evt) => {
        setFilter(evt.target.value);
      };

    return (
        <div>
            <input className='input' value={filter} onChange={handleFilterChange}/>
            <table id="reduxAssessmentTable">
                <thead>
                <tr>
                    <th>Titre</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>

                {
                    myCakeList.map((cake) => (
                        <tr key={cake.id}>
                            <td className='title'>{cake.title}</td>
                            <td className='description'>{cake.description}</td>
                            <td className='image_row'>
                                <img src={cake.image} alt={cake.title} />
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}
