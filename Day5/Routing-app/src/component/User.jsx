import { useState, useEffect } from "react";
const User = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [start, setStart] = useState(25);


  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (response.ok) {
          const data = await response.json();
          setdata(data);
          setloading(false);
          console.log(data);
        }
      } catch (e) {
        console.log("Error : " + e);
      }
    };
    fetchdata();
  }, []);
  const handleButton = (nextPage) => {
    setStart(nextPage * 25);
    console.log(start);
  };
//   const handlelocation=(id)=>{
//     navigate(`/user/${id}`);
//     console.log("function is clicked");
//   }

  return (
    <div className="div1">
      <div className="div1-container1">
        <h3>Fetching API</h3>
        <p>fetch data</p>
      </div>
      <div className="div1-container2">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead
              style={{ backgroundColor: "rgb(227, 227, 227)", color: "black" }}
            >
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(start - 25, start).map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{item.completed ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="div2">
    <button className="button" onClick={()=>{handleButton(1)}}>1</button> 
    <button className="button" onClick={()=>{handleButton(2)}}>2</button>
    <button className="button" onClick={()=>{handleButton(3)}}>3</button>
    <button className="button"onClick={()=>{handleButton(4)}}>4</button>
    <button className="button"onClick={()=>{handleButton(5)}}>5</button>
    <button className="button"onClick={()=>{handleButton(6)}}>6</button>
    <button className="button"onClick={()=>{handleButton(7)}}>7</button>
    <button className="button"onClick={()=>{handleButton(8)}}>8</button>
        </div>  
    </div>
  );
};
export default User;