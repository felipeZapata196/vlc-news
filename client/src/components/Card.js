

export const Card = (post) => {
  return (
    <a class="link" href={post[0]._id}>
    <img class="image" alt=""src={post[0].image}/>
    <div className="divHeader" style={{left:'2%'}}>
        <div className="titular">{post[0].title}</div>
        <div className="category"> <span> <span style={vl}></span>Actualidad social</span></div>
    </div>
</a>
  );
}
const vl = {
    borderLeft: '4px solid red',
    height: '8px',
    marginRight: '4px'
  


  
  }