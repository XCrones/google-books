import { HeaderComponet, FooterComponent, RoutesComponent } from "..";

const App = () => {
  return (
    <>
      <HeaderComponet />
      <main className="container font-iter">
        <RoutesComponent />
      </main>
      <FooterComponent />
    </>
  );
};

export default App;
