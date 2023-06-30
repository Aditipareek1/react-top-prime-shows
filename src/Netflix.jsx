import Card from './Card'
import Sdata from './Sdata';

const Netflix =()=>{
    const netflixCards = Sdata.filter((item)=> item.platform==='Netflix')
    return(
        <>
        {netflixCards.map((item)=>(
        <Card 
        key = {item.id}
        imgSrc = {item.imgSrc}
        genre = {item.genre}
        link={item.Link}
        title ={item.title} />
    ))}
    </>
    )
}

export default Netflix;