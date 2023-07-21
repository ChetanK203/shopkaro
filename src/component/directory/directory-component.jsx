import DirectoryItem from '../directory-item/directory-item.component';
import './directory.scss';

const categories = [
  {
    id: 1,
    title: "jacjets",
    imageUrl: "https://i.pinimg.com/474x/df/4c/03/df4c0336ea545ba7c8becb01f29043c4.jpg",
    route: 'shop/jackets',
  },
  {
    id: 2,
    title: "hats",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtYIlqMZOfcEtTUt-VKpsxnIoWicgnbm4Ig&usqp=CAU",
    route: 'shop/hats',
  },
  {
    id: 3,
    title: "shoes",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouMZgbhHkrr86YJHAGiNk-dVMczbWKbNdyg&usqp=CAU",
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://img.freepik.com/free-photo/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated_231208-5946.jpg?w=2000",
    route: 'shop/womens',
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://w0.peakpx.com/wallpaper/360/345/HD-wallpaper-men-model-man.jpg",
    route: 'shop/mens',
  }
]
const Directory = () => {
    return(
        <div className="directory-container ">
    {categories.map((category)=>(
      <DirectoryItem key={category.id} category={category} />
    ))} 
    </div>
    )
}
export default Directory;