function MainContent(props)
{
   return(
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
   );
}

export default MainContent;