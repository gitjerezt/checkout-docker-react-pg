const Data = (props) => { 
    let users = props.props
    return (
      <tbody>
          {
              users.map((user, index) => {
                  let first_name = user.first
                  let last_name = user.last
                  let age = user.age
                  let id = user.id
  
                  return (
                      <tr data-id={`${id}`}>
                          <td>{first_name}</td>
                          <td>{last_name}</td>
                          <td>{age}</td>
                      </tr>   
                  )})}   
     </tbody>
    );
  }
  
  export default Data;      
        
        
        
        
        
        
        