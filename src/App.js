import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
    ],
  },
];

function App() {
  const [openStates, setOpenStates] = useState([]);
  const [opencity, setOpenCity] = useState([]);
  console.log(openStates);
  console.log(opencity);
  const removeAll = (index) => {
    var opencityLocal = opencity;
    for (var i = 0; i < opencityLocal.length; i++) {
      const stateIndex = opencityLocal[i].split(" ")[1];
      const stateOriginalIndex = index.split(" ")[1];
      if (stateIndex == stateOriginalIndex) {
        opencityLocal.splice(i, 1);
        i--;
      }
    }
    setOpenCity(opencityLocal);
    return openStates.filter((i) => i !== index);
  };
  return (
    <div className="App">
      {states.map((item, index) => {
        var stateIndex = `state ${index + 1}`;
        return (
          <div key={stateIndex}>
            <span
              style={{ color: "red" }}
              onClick={() => {
                setOpenStates(
                  openStates.includes(stateIndex)
                    ? removeAll(stateIndex)
                    : [...openStates, stateIndex]
                );
              }}
            >
              {item.name}
            </span>
            {openStates.includes(stateIndex) &&
              item.cities.map((city, cityindex) => {
                var cityRealIndex = `city ${index + 1} ${cityindex + 1}`;
                return (
                  <div key={cityindex}>
                    <span
                      style={{ color: "blue" }}
                      onClick={() => {
                        setOpenCity(
                          opencity.includes(cityRealIndex)
                            ? opencity.filter((i) => i !== cityRealIndex)
                            : [...opencity, cityRealIndex]
                        );
                      }}
                    >
                      {city.name}
                    </span>

                    {opencity.includes(cityRealIndex) &&
                      city.towns.map((town, townindex) => {
                        return (
                          <div style={{ color: "green" }} key={townindex}>
                            {town.name}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default App;