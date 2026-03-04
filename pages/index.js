import CapoeiristaButton from "./capoeirabutton";
function Home(){
    return (
    <div>
       <h1 style={{ textAlign: "center" }}>
        Inicio da plataforma RodaAxê primeira palataforma
      </h1>


      <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
        <CapoeiristaButton />
      </div>
    </div>
  );
}

export default Home;