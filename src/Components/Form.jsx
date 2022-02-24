import React from "react"

export default function Form({onAdd}){
    const [formData, setFormData] = React.useState({});
    
    const handleChange = (e) => {
        let {name, value, type, checked} = e.currentTarget;

        value = type === "checkbox" ? checked : value;

        if(type == "file"){
            value = URL.createObjectURL(e.target.files[0])
        }

        setFormData( {...formData, [name]: value } )

        console.log(formData)
    }

    const onsubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
    }
     return (
         <div style={{margin: "2rem auto", border: "1px solid black", width: "70%", padding: "1rem", borderRadius: "10px"}}>
             <form>
                 <div>
                     <label htmlFor="name">Name</label>
                     <input type="text" name="name" placeholder="Enter your Name" value={formData.name} onChange={handleChange} />
                 </div>

                 <div>
                     <label htmlFor="age">Age</label>
                     <input type="number" name="age" placeholder="Enter your Age" value={formData.age} onChange={handleChange} />
                 </div>

                 <div>
                     <label htmlFor="address">Address</label>
                     <input type="text" name="address" placeholder="Enter your current Address" value={formData.address} onChange={handleChange} />
                 </div>

                 <div>
                     <label htmlFor="dep">Select Department</label>
                     <select name="dep" onChange={handleChange}>
                         <option value="">Select</option>
                         <option value="delivery">Delivery</option>
                         <option value="development">Development</option>
                         <option value="testing">Testing</option>
                         <option value="design">Design</option>
                     </select>
                 </div>

                 <div>
                     <label htmlFor="salary">Salary</label>
                     <input type="number" name="salary" placeholder="Enter your salary" value={formData.salary} onChange={handleChange} />
                 </div>

                 <div>
                     <input type="checkbox" name="isMarried" value={formData.isMarried} onChange={handleChange} />
                     <label htmlFor="isMarried">Married</label>
                 </div>

                 <div>
                     <input type="file" name="pic" onChange={handleChange}/>
                 </div>

                 <button onClick={(e) => onsubmit(e)}>SUBMIT</button>
             </form>
         </div>
     )
}