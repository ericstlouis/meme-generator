import React, {useState, useEffect} from 'react'


const Meme = () => {
  const [memeImage, setMemeImage] = useState([]);
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    image: 'https://i.imgflip.com/30b1gx.jpg',
  });

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then((response) => response.json())
    .then((json) => setMemeImage(json.data.memes))
  }, [])

  const handleClick = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    const randomArray = Math.floor((Math.random() * memeImage.length) + 1)
    const url = memeImage[randomArray].url
    setMeme((prevState) => {
      return {
        ...prevState, 
        image: url
      }
    })
  }

    console.log(memeImage);


  const handleChange = (e) => {
    const { name, value } = e.target;
      setMeme((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
  }

  return (
    <div className="flex justify-center flex-col py-8 px-10">
      <div className="grid gap-5 grid-cols-2">
        <input
          className="border border-solid h-10 border-black rounded-md indent-5	"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="border border-red-900 h-10 border-solid rounded-md indent-5	"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button
          className="col-span-2 font-karla h-10 text-lg font-bold text-white rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500"
          onClick={handleClick}
        >
          Get a new meme
        </button>
      </div>
      <div className="w-4/6 place-self-center m-8 relative">
        <img className="w-full" src={meme.image} alt="random meme" />
        <h1 className="absolute w-full text-white text-center tracking-wider font-semibold text-6xl p-4 top-0 drop-shadow-2xl">
          {meme.topText}
        </h1>
        <h2 className="absolute w-full text-white text-center tracking-wider font-semibold text-6xl p-4 bottom-0 drop-shadow-2xl">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
}

export default Meme
