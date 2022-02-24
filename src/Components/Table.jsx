import React from "react";

export default function Table({data, filterBy, deleteEmp}){
    const [sort, setSort] = React.useState("");

    const filterTable = (e) => {
        filterBy(e.currentTarget.value);
    }

    const SortTable = (e) => {
        let q = e.currentTarget.value;
        if ( q == "asc" ) {
            for(let i = 0; i < data.length - 1; i++){
                for( let j = i + 1; j < data.length; j++){
                    if(Number(data[i].salary) > Number(data[j].salary)){
                        let temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
            }
        }
        else if( q == "dse" ){
            for(let i = 0; i < data.length - 1; i++){
                for( let j = i + 1; j < data.length; j++){
                    if(Number(data[i].salary) < Number(data[j].salary)){
                        let temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
            }
        }
        console.log(q, data)
        setSort(q)
    }

   
    return (
        <div style={{ height:"250px"}}>
            Filter By: <select name="filter" onChange={(e) => filterTable(e)}>
                <option value="">Select</option>
                <option value="delivery">Delivery</option>
                <option value="development">Development</option>
                <option value="testing">Testing</option>
                <option value="design">Design</option>
            </select>

            Sort By: <select name="sort" onChange={(e) => SortTable(e)} >
                <option value="">Select</option>
                <option value="asc">ASENDING</option>
                <option value="dse">DESENDING</option>
            </select>


        <table border="1" style={{margin:"10px auto" }}>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Is Married</th>
                    <th>Profile Pic</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    data?.map( (item, ind) => (
                        <tr key={item.id}>
                            <td>{ind + 1}</td>
                            <td>{item.name}</td>
                            <td> {item.age} </td>
                            <td>{item.dep} </td>
                            <td> {item.salary} </td>
                            <td> {item.isMarried ? "YES" : "NO"} </td>
                            <td> <a href={item.pic}> View </a> </td>
                            <td> {item.address} </td>
                            <td> <button onClick={() => deleteEmp(item.id)}>DELETE</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

        </div>
    )
}