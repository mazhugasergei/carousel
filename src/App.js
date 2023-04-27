import { Carousel, CarouselItem } from "./components/Carousel"

export default () => {
  return (
    <Carousel>
      <CarouselItem
        img="https://www.treehugger.com/thmb/vGoI3PDkxSax6FJBEnLLqQkAeoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-513053667-5b6a0d7846e0fb002cffab15.jpg"
        title="Discover US Forest Serenity"
        text="Experience peace in lush forests with towering trees, babbling streams, and diverse wildlife. Hike to breathtaking vistas or relax and reconnect with nature's tranquil beauty."
      />
      <CarouselItem
        img="https://media.istockphoto.com/id/1045577600/photo/autumn-view-of-the-birch-street-in-the-morning-in-warsaws-old-town-poland.jpg?s=612x612&w=0&k=20&c=PfHhGC4F2rvfRsv-Ffu8LnNFzrFRQY1aJy9uMvS-deI="
        title="Charming European Streetscapes"
        text="Discover picturesque streets with Gothic to Baroque architecture, cobblestones, and flower-filled balconies. Lose yourself in enchanting alleys with rich history and charm."
      />
    </Carousel>
  )
}