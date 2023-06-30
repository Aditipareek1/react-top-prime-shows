import Card from './Card'
import Sdata from './Sdata';

const Prime =()=>{
    const primeCards = Sdata.filter((item)=> item.platform==='Prime')
    return(
        <>
        {primeCards.map((item)=>(
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

export default Prime;