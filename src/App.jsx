import "./App.css";
import Map from "./components/Map";

function App() {
  // Creating the location that we want to point to
  const location = {
    address:
      "75 Aminu Kano Cres, Wuse 2, Abuja 904101, Federal Capital Territory",
    lat: 9.088469,
    lng: 7.483052,
  };
  return (
    <>
      {/* Calling the Map component that we created with its props */}
      <Map location={location} zoomLevel={14} />
    </>
  );
}

export default App;
