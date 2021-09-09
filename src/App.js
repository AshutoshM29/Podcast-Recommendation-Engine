import { useState } from "react";
import "./styles.css";

var podRecommend = {
  Comedy: [
    {
      name: "Monday Morning Podcast",
      description:
        "This is a twice weekly comedy podcast hosted by American comedian, actor and celebrity podcaster Bill Burr."
    },
    {
      name: "No New Notifications",
      description:
        "Comedian-designer duo Kanan Gill & Manek D'Silva are finally giving the least important topics in the world the attention they rightfully deserve."
    },
    {
      name: "Flagrant 2 ",
      description:
        "Flagrant 2 is a comedy podcast that delivers unfiltered, unapologetic, and unruly hot takes directly to your dome piece"
    }
  ],
  History: [
    {
      name: "Dan Carlin’s Hardcore History",
      description:
        "Hardcore History is Carlin's forum for exploring topics throughout world history. The episodes are generally centered on specific historical events and are discussed in a Theater of the Mind style."
    },
    {
      name: "The Correct History of India.",
      description:
        "Indian History is not a Myth! The British called it mythology for conversion & colonization purposes. Time to debunk the false Western narrative."
    },
    {
      name: "Forgotten India",
      description:
        "This podcast will bring out those historical events of Indian history which are either unremembered or deliberately forgotten"
    }
  ],

  Business: [
    {
      name: "Reply All",
      description:
        "It’s about the internet. Every week they cover a new story related to the web"
    },
    {
      name: "How I built this",
      description:
        "This is THE podcast to listen to if you want to understand how Airbnb, Instagram and even Southwest Airlines started. You’ll get to hear from the founders themselves in hour long segments."
    },
    {
      name: "Business Wars",
      description:
        "These guys show how large companies have been in secret ‘wars’ with each other. Like Blockbuster vs Netflix or Nike vs Adidas."
    }
  ],
  Science: [
    {
      name: "Varun Mayya's Cero",
      description:
        "Pondering everything from simulation theory to quantum mechanics to medicine to find a consistent narrative to our lives"
    },
    {
      name: "Stuff To Blow Your Mind",
      description:
        "Examines neurological quandaries, cosmic mysteries, evolutionary marvels and the technological underpinnings of our transhuman future"
    },
    {
      name: "The Common Descent",
      description:
        "A podcast about the fascinating diversity of life, past and present"
    }
  ],
  SelfHelp: [
    {
      name: "Sol Brah Solcast",
      description:
        "Creating immersive audio experiences discussing health, bodybuilding, philosophy and total life optimisation"
    },
    {
      name: "Jordan Peterson Podcast",
      description:
        "This podcast breaks down the dichotomy of life through interviews and lectures that explain how individuals and culture are shaped by values, music, religion, and beyond."
    },
    {
      name: "Making Sense with Sam Harris",
      description:
        "Join neuroscientist, philosopher, and best-selling author Sam Harris as he explores important and controversial questions about the human mind, society, and current events."
    }
  ]
};

var genreWeKnow = Object.keys(podRecommend);
export default function App() {
  // var
  var [genre, setGenre] = useState("Comedy");

  // functions
  function genreClickHandler(genre) {
    // var genre = podRecommend[genre];
    setGenre(genre);
  }
  return (
    <div className="App">
      <nav>
        <h1 className="title">Podcast Recommendation Engine</h1>
      </nav>
      <p className="text">Select a genre!!</p>
      <div>
        {genreWeKnow.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <hr className="line" />
      <p className="text">Here are some podcast to listen to</p>
      <div>
        <ul className="list-non-bullet">
          {podRecommend[genre].map((pod) => (
            <li className="border" key={pod.name}>
              {""}
              <div className="name">{pod.name}</div>
              <div className="desc">{pod.description}</div>
            </li>
          ))}
        </ul>

        <footer>
          <h1>About</h1>
          <p className="text-f">Want to listen to some great Podcast!</p>
          <p className="text-f">But don't know any?</p>
          <p className="text-f">Let me help you</p>
          <p className="text-f">
            Just select any genre and we'll recommend you some great Podcast
          </p>
          <h2>Made with ❤️ by : Ashutosh</h2>
        </footer>
      </div>
    </div>
  );
}
