function Newsitem(props){
  return (
      // <div classNameName="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px",cursor:"pointer"}}>
      //     <img src={props.src} style={{height:"200px",width:"100%",overflow:"hidden"}} classNameName="card-img-top" alt="..."/>
      //     <div classNameName="card-body">
      //       <h5 classNameName="card-title" style={{maxHeight:"50px", overflow:"hidden"}}>{props.title + "..."}</h5>
      //       <p classNameName="card-text" style={{maxHeight:"100px", overflow:"hidden"}}>{props.description + "..."}</p>
      //       <a href={props.url} classNameName="btn btn-primary">Read More</a>
      //     </div>
      // </div>
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"300px",cursor:"pointer"}}>
        <img src={props.src} className="card-img-top" alt="..." style={{height:"200px",width:"100%"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.title + "..."}</h5>
          <p className="card-text">{props.description + "..."}</p>
          <a href={props.url} className="btn btn-primary">Read More</a>
        </div>
    </div>
  ); 
}

export default Newsitem;